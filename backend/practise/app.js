const express = require("express");
const app =express();

app.get("/",(req,res) =>{
    res.send("<h1>Hello from the server</h1>");
});
app.get("/about",(req,res) =>{
    res.send("Hello from the about page");
});




app.listen(5000, ( )=> {
    console.log("server running at 5000");
});