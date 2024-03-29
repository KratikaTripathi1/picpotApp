const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    title:{type:String, required:true},
    desc:{type:String, required:true},
    pic:{type:String, required:true},
    address:{type:String, requires:true},
    userid:{type:String}
});

module.exports = mongoose.model("Location", locationSchema);