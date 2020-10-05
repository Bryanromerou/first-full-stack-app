const express = require ("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const PORT = 4001;

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(methodOverride('_method'));

//Property Controller
const propertyCtrl = require("./controllers/propertyController");
app.use("/properties", propertyCtrl);

app.listen(PORT, ()=>{
    console.log("Now listening to port 4001");
});