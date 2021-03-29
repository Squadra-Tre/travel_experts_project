const mongoose = require('mongoose');
const AutoIncrement= require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;


const packSchema = new mongoose.Schema({
    PackageId: {
        type: Number,
    },
    PkgName: {
        type: String,
        required: true,
        trim: true,
    },
    PkgStartDate: {
        type: Date,
        required: true,
        trim: true,
    },
    PkgEndDate: {
        type: Date,
        required: true,
        trim: true,
    },
    PkgDesc: {
        type: String,
        required: true,
        trim: true,
    },
    PkgBasePrice: {
        type: Number,
        required: true,
        trim: true,
    },    
    Img: {
        type: String,
        required: true,
        trim: true,
    },
    ImgLg: {
        type: String,
        required: true,
        trim: true,
    },
    _id: {
        type: Number,
    },
    DetPkgDesc: {
        type: String,
        required: true,
        trim: true,
    }
});

packSchema.plugin(AutoIncrement, {inc_field: '_id'});
packSchema.plugin(AutoIncrement, {inc_field: 'PackageId'});


packs = mongoose.model('package', packSchema)
        
module.exports={
   deleteData:function(deleteId, callback){
                  
      userData= packs.findByIdAndDelete(deleteId);
      userData.exec(function(err, data){
        if (err) throw err;
         return callback(data);
      })
   }
}