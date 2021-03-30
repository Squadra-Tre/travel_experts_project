/*Matt Biesbroek - Team 3*/

/*Controller for deleting packages from the database*/

var deleteModel= require('../models/packages');
module.exports={
    deleteData:function(req, res){
      
      var deleteId= req.params.id;
      deleteModel.deleteData(deleteId,function(data){
         res.redirect('/add')
         console.log(data.affectedRows + " record was deleted");
      });
    }
}