import User from "../models/User.js";
import jwt from "jsonwebtoken"



export async function signup(req,res){
    const {email,password,fullName} = req.body;

    try {
        if(!email || !password || !fullName) {
            return res.status(400).json({message: "All fields are required"})
        }

        const existUser = await User.findOne({email});
        
        if(password < 8) {
            return res.status(400).json({message: "Password must be greate or equal to 8 character"})
        }
        if(existUser) return res.status(400).json({message: "Email should be unique"});

        const idx = Math.floor(Math.random() * 100) + 1;
        
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

        const newUser = await User.create({
            email,
            fullName,
            password,
            profilePic: randomAvatar,
        })

    const token = jwt.sign({userId: newUser._id},process.env.JWT_SECRET_KEY,{
        expiresIn:"7d",
    })

    res.cookie("jwt",token,{
        maxAge:7 * 24 * 60 *60 * 10009 ,
        httpOnly: true,
        sameSite: "Strict",
        secure: process.env.NODE_ENV === "production"
    })

    res.status(201).json({sucesss: true, user:newUser});


    } catch (error) {
        console.log("Error in signout",error);
        res.status(500).json({message: "Internal Error"});
    }
}

export function login(req,res){
    res.send("login route")
}

export function logout(req,res){
    res.send("logout route")
}