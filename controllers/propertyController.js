const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/",(req,res)=>{
    db.Property.find({},(err,allProperties)=>{
        if(err)
            console.log(`You've got an error: ${err}`);
        else {
            res.send(allProperties);
        }
    })
    // console.log("Hello");
});

module.exports = router;