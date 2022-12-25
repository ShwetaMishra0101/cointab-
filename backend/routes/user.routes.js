
const express = require("express")
const client = new MongoClient(process.env.MONGO_URL)
const app = express.Router();

const Data = require ("./model/users.model")
app.get("/showDetails",async(req,res)=>{
    const data =await Data.find()
    res.send(data)
})

app.delete("/delete",async(req,res)=>{
  const data = await client.db("persons");
  const abc = data.collection("details")
  console.log(abc)
  abc.drop()
  res.send("deleted")
})

app.post("/sendData", async (req, res) => {
  // console.log(req.body);
  const {gender,name,picture,email,location} = req.body;
  const post = await Data.create({gender,name,picture,email,location});
  console.log("Data", post);
  await post.save();
  res.send("successful");
});

module.exports = app