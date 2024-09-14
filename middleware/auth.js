const jwt = require("jsonwebtoken");
const { log } = require("../utils/logger");

const priorityMap = {
    "public":0,
    "user":1,
    "admin":2
}

exports.isAuthenticatedUser = async(req , res , next)=>{
    console.log(req.cookies);
    let {token} = req.cookies;
    if(!token){
        res.status(401).json({
            success:false,
        });
        return;
    }
    const decodedData = jwt.verify(token , process.env.JWT_SECRET);
    const data = require("../data.json")["users"];
    for(let i=0; i<data.length; i++){
        if(data[i].id == decodedData.id){
            req.user = data[i];
            break;
        }
    }
    next();
}
exports.isAuthorizedUser = async(req , res , next)=>{
    const priority = priorityMap[req.user.role];
    if(priority >= priorityMap["user"]){
        console.log("IM USER or ADMIN");
        await log(req.url , req.user.id , req.user.role , true);
        next();
    }else{
        console.log("IM NEITHER");
        await log(req.url , req.user.id , req.user.role , false);
        res.status(403).json({
            success:false,
        })
    }
}

exports.isAuthorizedAdmin = async(req , res , next)=>{
    const priority = priorityMap[req.user.role];
    if(priority >= priorityMap["admin"]){
        console.log("IM ADMIN");
        await log(req.url , req.user.id , req.user.role , true);
        next();
    }else{
        console.log("IM NOT ADMIN");
        await log(req.url , req.user.id , req.user.role , false);
        res.status(403).json({
            success:false,
        })
    }
}