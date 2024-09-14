const fs = require("fs");

exports.logout = async(req,res,next)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly:true
    });

    res.status(200).json({
        success:true,
        message: "Logged Out"
    });
}

exports.deleteMe = async(req , res , next)=>{
    const data = require("../data.json")["users"];
    const newData = {
        users:[]
    }
    for(let i=0; i<data.length; i++){
        if(data[i].id == req.user.id){
            continue;
        }
        newData["users"].push(data[i]);
    }
    console.log(newData);
    fs.writeFile("data.json",JSON.stringify(newData) , (err , data)=>{console.log(data)});
    res.status(200).json({
        success:true,
        message: "Logged Out"
    });
}