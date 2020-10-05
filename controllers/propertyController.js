const express = require("express");
const router = express.Router();

const db = require("../models");

//Index
router.get("/",(req,res)=>{
    db.Property.find({},(err,allProperties)=>{
        if(err)
        console.log(`You've got an error: ${err}`);
        else {
            res.render("properties/indexProperty",{
                properties: allProperties,
            });
        }
    })
});
//New
router.get("/new",(req,res)=>{
    res.render("properties/newProperty");
});

//Create
router.post("/",(req,res)=>{
    db.Property.create(req.body,(err,newProperty)=>{
        if(err)
        console.log(`You've got an error: ${err}`);
        else {
            res.send(newProperty);
        }
    });
});

//Show
router.get("/:propertyId",(req,res)=>{
    db.Property.findById(req.params.propertyId,(err, foundProperty)=>{
        if(err)
        console.log(`You've got an error: ${err}`);
        else {
            res.render("properties/showProperty",{
                property: foundProperty,
            });
        }
    });
});
//Edit
router.get("/:propertyId/edit",(req,res)=>{
    db.Property.findById(req.params.propertyId,(err, editProperty)=>{
        if(err)
        console.log(`You've got an error: ${err}`);
        else {
            res.render("properties/editProperty",{
                property: editProperty,
            });
        }
    });
});

//Update
router.put("/:propertyId",(req,res) => {
    db.Property.findByIdAndUpdate(req.params.propertyId,req.body,{new:true},(err, newProperty)=>{
        if(err)
        console.log(`You've got an error: ${err}`);
        else {
            res.redirect(`/properties/${req.params.propertyId}`);
        }
    });
});

//Destroy
router.delete("/:propertyId",(req,res)=>{
    db.Property.findByIdAndRemove(req.params.propertyId,(err,restOfProperties)=>{
        if(err)
        console.log(`You've got an error: ${err}`);
        else {
            res.redirect(`/properties`);
        }
    })
});




module.exports = router;