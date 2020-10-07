const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zipcodeSchema = new Schema({
    code:{
        type: String,
        unique: true,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    properties: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property'
    }],
},{timestamps: true});

const Zipcode = mongoose.model("Zipcode",zipcodeSchema);

module.exports = Zipcode;