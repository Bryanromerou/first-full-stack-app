const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/",(req,res)=>{
    // db.City.find({},(err,allCities)=>{
    //     if (err) console.log(err);
    //     res.render("cities/index",{
    //         cities: allCities,
    //     })
    // })
    res.send("<h1>Working</h1>");
});

module.exports = router;