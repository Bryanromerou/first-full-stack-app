const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/properties";
const Property = require("./Property");

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected",()=>{
    console.log("Successfully connected to mongodb!");
});

mongoose.connection.on("error",(err)=>{
    console.log(`Oh no there has been an error: ${err}`);
});

module.exports = {
    Property: Property,
}