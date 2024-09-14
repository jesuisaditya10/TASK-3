const app = require("./app");
const dotenv = require("dotenv");

//config
dotenv.config({path:".env"});


process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
})


const server = app.listen(process.env.PORT , ()=>{
    console.log("Server is working on http://localhost:",process.env.PORT);
});