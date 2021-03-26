var express = require('express');
var router = express.Router();
const Agent = require("../models/contact");
const Agency = require("../models/agency");
const mongoose = require("mongoose");

const dbURI = "mongodb+srv://travel-expert:travel1234@cluster0.orc02.mongodb.net/travelexperts_mongodb_json_collections?authSource=admin&replicaSet=atlas-71fnej-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('CONTACTS connected to db.'))
  .catch((err) => console.log(err));
const db = mongoose.connection;

router.get("/", (req, res) => {
    Agent.find({}, (err, agents) => {
      if (err) return res.json(err);
      Agency.find((err, agencies) => {
        // console.log(agents, agencies);
        agents.map((agent1) => {
          agent1.agency = agencies.find(
            (agnc) => agnc.AgencyId == agent1.AgencyId
          );
          agent1.dummy = 5;
          // console.log(agent1.agency);
          //return agent1;
        });
        console.log("agents", agents);
        //console.log("agent1", agent1);
        res.render("contact", { agents: agents });
      });
    });
});

module.exports = router;