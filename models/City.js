const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    zipcode:{
        type: String,
        unique: true,
        required: true
    },
    state:{
        type: String,
        required: true
    }
});

const City = mongoose.model("City",citySchema);

module.exports = City;