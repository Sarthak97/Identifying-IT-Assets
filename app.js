var express = require("express"),
    app     = express(),
    body    = require("body-parser");
    
app.use(body.urlencoded({extended : true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/admin",function(req,res){
    res.render("admin");
});

app.post("/search",function(req,res){
    res.send("HEY THERE!");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server Started.");
});