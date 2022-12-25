const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const connection = mongoose.connect("mongodb+srv://Shweta:shweta123@cluster0.cui9tcw.mongodb.net/cointab?retryWrites=true&w=majority")

module.exports = connection;