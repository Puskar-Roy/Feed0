import { Request, Response } from "express";
import User from "../models/User";
import jwt from 'jsonwebtoken'
import bcryptjs from "bcryptjs";

const loginController = async (req :Request, res :Response) => {
   const { email, password } = req.body;
   if(!email || !password){
    return res.status(404).json({ error: "Fill All Details", success: false });
   }
   try {
     const userExist = await User.findOne({ email: email });
     if (!userExist) {
       return res.status(404).json({ error: "User Not Found", success: false });
     } else {
       const verifyPass = await bcryptjs.compare(password, userExist.password);
       if (verifyPass) {
         const token = jwt.sign(
           { id: userExist._id, roll: userExist.phone },
           "process.env.JWT"
         );
         const expirationDate = new Date(
           Date.now() + 365 * 24 * 60 * 60 * 1000
         ); 
         const options = {
           expires: expirationDate,
           httpOnly: true,
         };
         return res.cookie("access_token", token, options).status(201).json({
           msg: "Log In Done !",
           userName: userExist.name,
           token: token,
           cookie: "stored",
           success: true,
         });
       } else {
         return res
           .status(500)
           .json({ error: "Invalid Details ", success: false });
       }
     }
   } catch (error) {
     res.status(500).json({"error":error , success: false});
   }
};




const registerController = async (req: Request, res: Response) => {
   try {
     const {
       password,
       cpassword,
       name,
       department,
       batch,
       email,
       phone,
       college
     } = req.body;
     if (
       !name ||
       !department ||
       !batch ||
       !college ||
       !email ||
       !phone ||
       !password ||
       !cpassword
     ) {
       return res
         .status(400)
         .json({ error: "Fill required fields", success: false });
     }
     const userExist = await User.findOne({ email: email });
     const userExistPhone = await User.findOne({ phone: phone });
     if (userExist || userExistPhone) {
       return res
         .status(403)
         .json({ error: "User Already Exists", success: false });
     } else {
       const newUser = new User({
         password,
         cpassword,
         name,
         department,
         batch,
         college,
         phone,
         email,
       });
       try {
         const user = await newUser.save();
         return res
           .status(200)
           .json({ message: "Registration Done!", success: true });
       } catch (error) {
         return res.status(500).send({ error: error, success: false });
       }
     }
   } catch (error) {
     return res.status(500).send({ error: error, success: false });
   }
};




export default { loginController, registerController };
