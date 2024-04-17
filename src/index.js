import dotenv from"dotenv";
dotenv.config();
import express from"express";
import mongoose from "mongoose";
import Configs from "./configs/index.js";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Zenkits")
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch(err =>{
    console.log(err);
})
app.listen(Configs.PORT,()=>{
    console.log(`Server is Listening on port ${Configs.PORT}`);
})