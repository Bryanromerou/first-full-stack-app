const express = require ("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const PORT = 4001;

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(methodOverride('_method'));
app.use(express.static("public"));

//Property Controller
const propertyCtrl = require("./controllers/propertyController");
app.use("/properties", propertyCtrl);

app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(PORT, ()=>{
    console.log("Now listening to port 4001");
});