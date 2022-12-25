
const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  gender:String,
  name:{
    first:String,
    last:String,
    title:String
  },
  picture:{
    large:String
  },
  email:String,
  location:{
    city:String,
    country:String,
    state:String,
  }
});

const Data = mongoose.model("Details", Schema);
module.exports = Data