const fs = require("fs");
const bcrypt = require("bcryptjs");
const sendToken = require("../utils/jwtToken");
const validityCheck = require("../utils/validityCheck");

exports.getFunction = async (req , res , next) =>{
    res.status(200).json({
        success:true
    })
}

exports.login = async (req , res , next) =>{
    const {email , password} = req.body;
    if(!validityCheck(email) || !validityCheck(password)){
        res.status(200).json({
            success:false,
            message:"Invalid Username or Password"
        })
        return;
    }
    const data = require("../data.json")["users"];
    let flag = 0;
    let userObj; 
    for(let i=0; i<data.length; i++){
        const isEmailMatched = data[i].email === email;
        const isPasswordMatched = await bcrypt.compare(password , data[i].pass);
        if(isEmailMatched && isPasswordMatched){
            flag = 1;
            userObj = data[i];
            break;
        }
    }
    if(flag === 1){
        sendToken(userObj , 200 , res);
    }else{
        res.status(200).json({
            success:false,
            message:"Invalid Username or Password"
        })
    }
}

exports.register = async (req , res , next)=>{
    const {email , password , name} = req.body;
    if(!validityCheck(email) || !validityCheck(password) || !validityCheck(name)){
        res.status(200).json({
            success:false,
            message:"Invalid Details"
        })
        return;
    }
    const data = require("../data.json");
    for(let i=0; i<data.users.length ; i++){
        if(data.users[i].email == email){
            res.status(200).json({
                success:false,
                message:"User Already Exists"
            });
            return;
        }
    }
    const pass = await bcrypt.hash(password , 10);
    let id = 0;
    if(data.users.length > 0){
        id = data["users"][data.users.length - 1].id + 1;
    }
    const userObj = {
        id:id,
        email:email,
        pass:pass,
        name:name,
        role:"user"
    }
    data.users.push(userObj);
    fs.writeFile("data.json" , JSON.stringify(data) , (err , data)=>{
        console.log(data);
    });
    sendToken(userObj , 200 , res);
}