const validityCheck = (string)=>{
    if(string && string.length && string.trim() != ""){
        return true;
    }
    return false;
}

module.exports = validityCheck;