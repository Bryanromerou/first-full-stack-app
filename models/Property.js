const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    address: {type: String, required: true},
    price: {type: Number},
    bedrooms: {type: Number, required: true},
    lot: {type: Number},
    img: {type: String}
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;