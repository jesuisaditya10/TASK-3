const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());

app.use(cookieParser());

//Routes and MiddleWares
const publicRoutes = require("./routes/publicRoute");
const userRoutes= require("./routes/userRoute");
const adminRoutes= require("./routes/adminRoute");

app.use("/public" , publicRoutes);
app.use("/user" , userRoutes);
app.use("/admin" , adminRoutes);


module.exports = app;