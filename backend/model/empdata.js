const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpSchema = new Schema({

    username:String,
    jobtype:String,
    ccode:Object,
    phone:Number,
    email:String,
    address:String,
    city:String,
    state:String,
    pcontact:String,
    cpphone:Object,
    pphone:Number,
    prelation:String,
    scontact:String,
    spphone:Object,
    sphone:Number,
    srelation:String
});

var empdata = mongoose.model('empdata', EmpSchema);







module.exports = empdata;