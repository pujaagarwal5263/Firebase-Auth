const express=require("express");
const { signup, login, findByEmail, getDetails } = require("../controllers/authControllers");
const router=express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/getuser",findByEmail)
router.post("/getdetails/:id",getDetails)

module.exports=router;