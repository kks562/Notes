const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI
).then(()=>console.log("mongo db connected"))
.catch((err)=>console.log(err));

app.use("/api/notes",require("./models/Notes"));
app.listen(3000,()=>console.log("port is running on 3000"));