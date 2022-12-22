const admin=require("firebase-admin");
const { use } = require("../routes/router");

const signup=async(req,res)=>{
    try{
        const userCreated= await admin.auth().createUser({
            email: req.body.email,
            password: req.body.password,
            emailVerified: false,
            disabled: false
        })
        return res.status(200).json(userCreated);
    }catch(err){
     res.send(err)
    }
}

const login=async(req,res)=>{
    try{
        console.log("me here");
        const user = await admin.auth().signInWithEmailAndPassword(req.body.email)
       console.log(user);
       return res.json(user)
      }catch(e){
        console.log(e);
        return res.json({message:'cannot fetch user data'})
       }
}

const findByEmail=async(req,res)=>{
    try{
        const user = await admin.auth().getUserByEmail(req.body.email)
        return res.json(user)
    }catch(err){
        console.log(err);
    }
}

const getDetails=async(req,res)=>{
    try{
        const user = await admin.auth().getUser(req.params.id)
        res.json(user)
    }catch(err){
        res.send(err)
    }
}
module.exports={signup, findByEmail, getDetails, login}
