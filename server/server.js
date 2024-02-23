import express from 'express';
import mongoose from 'mongoose';





const app = express();

app.get("/user/all",(req,res)=>{
    res.json({
        name:"manoj",
        roll:106
    })
})

app.listen(5000,(req,res)=>{
    console.log("server is Working!");
});