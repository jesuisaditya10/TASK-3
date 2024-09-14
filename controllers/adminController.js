const fs = require("fs");
const validityCheck = require("../utils/validityCheck");

exports.roleUpdate = async(req , res , next)=>{
    const {role , id} = req.body;
    if(!validityCheck(role) || !validityCheck(id)){
        res.status(200).json({
            success:false,
            message:"Invalid Details"
        });
        return;
    }
    const data = require("../data.json");
    const newData = {
        "users":[]
    }
    for(let i=0; i<data.length; i++){
        if(data[i].id == id){
            const temp = data[i];
            temp.role = role;
            newData["users"].push(temp);
            continue;
        }
        newData["users"].push(data[i]);
    }
    fs.writeFile("data.json",JSON.stringify(newData));
    res.status(200).json({
        success:true
    })
}

exports.deleteUser = async(req , res , next)=>{
    const {id} = req.body;
    if(!validityCheck(id)){
        res.status(200).json({
            success:false,
            message:"Invalid ID"
        });
        return;
    }
    const data = require("../data.json");
    const newData = {
        "users":[]
    }
    for(let i=0; i<data.length; i++){
        if(data[i].id == id){
            continue;
        }
        newData["users"].push(data[i]);
    }
    fs.writeFile("data.json",JSON.stringify(newData));
    res.status(200).json({
        success:true
    })
}