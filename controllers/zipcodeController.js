const express = require("express");
const router = express.Router();

const db = require("../models");

//INDEX
router.get("/",(req,res)=>{
    db.Zipcode.find({},(err,allZipcodes)=>{
        if (err) console.log(err);
        console.log(allZipcodes);
        res.render("zipcodes/index",{
            zipcodes: allZipcodes,
        })
    });
});

//NEW
router.get("/new",(req, res)=>{
    res.render("zipcodes/new");
});

//CREATE
router.post("/",(req,res)=>{
    db.Zipcode.create(req.body,(err,newZipcode)=>{
        if(err) console.log(err)
        res.redirect(`/zipcodes/${newZipcode._id}`)
    })
});

//SHOW
router.get("/:zipId",(req, res)=>{
    db.Zipcode.findById(req.params.zipId).populate("properties")
    .exec((err,foundZip)=>{
        if(err) console.log(err);
        res.render("zipcodes/show",{
            zipcode: foundZip,
            properties: foundZip.properties
        });
    });
});


module.exports = router;