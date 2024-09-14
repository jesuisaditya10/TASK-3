const fs = require("fs");

exports.log = async (url , userId , userRole , accessStatus)=>{
    console.log("HEREeeee");
    const logString = `user with id ${userId} and role ${userRole} tried to access ${url} . Access Result : ${accessStatus}`;
    const fileDataObj = await fs.readFile("log.txt" , 'utf8' , async(err,data)=>{
        let fileData = "";
        if (err) {
            if (err.code === "ENOENT") {
                console.error("File not found:", err.path);
            } else {
                console.error("Error reading file:", err);
            }
        }else{
            fileData = data;
        }
        console.log("File content:", data);
        console.log("12",fileDataObj);
        console.log("14",fileData);
        fileData += logString;
        fileData += "\n";
        console.log("25",fileData);
        const res = await fs.writeFile("log.txt" , fileData , (err,data)=>{
            if(err){
                console.log("28",err);
            }else{
                console.log("30",data);
            }
    })
    });
}

exports.logUrl = (url)=>{
    return async(req,res,next)=>{
        req.url = url;
        next();
    }
}

