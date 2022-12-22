const express=require("express");
const app=express();

const admin=require("firebase-admin");
const router = require("./routes/router");
const credentials=require("./config/serviceAccountkey.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router)

app.listen(8000,()=>{
    console.log("server is running at 8000");
})