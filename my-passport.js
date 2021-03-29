const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;


module.exports.init = function (app) {
  app.use(
    require("express-session")({
      secret: process.env.PASSPORT_SECRET,
      resave: true,
      saveUninitialized: true,
    })
  );
  const { Customer } = require("./models/user");
  //console.log(Customer);

  passport.use(
    new LocalStrategy(function (username, password, done) {
      Customer.findOne({ userid: username }, function (err, user) {
        if (err) {
          return done(err);
        } // Error loading user from DB
        if (!user) {
          return done(null, false);
        } // No user
        bcrypt.compare(password, user.passwd, (err, res) => {
          if (res) {
            // passwords match! log user in
            return done(null, user);
          } else {
            // passwords do not match!
            return done(null, false, { msg: "Incorrect password" });
          }
        });

      });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    Customer.findById(id, function (err, user) {
      done(err, user);
    });
  });

  app.use(passport.initialize());
  app.use(passport.session());

  app.post('/login',
    passport.authenticate("local", { failureRedirect: "/" }),
    function (req, res) {
      console.log(req.query);
      const usermsg = `Hello ${req.user?.userid}`;
      const redirect = req.query.redirect || '/?usermsg=' + usermsg;
      res.redirect(redirect);
    }
  );


  app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
  });
  app.get("/log-out", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
