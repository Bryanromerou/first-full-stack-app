const db = require('./models');
const propertyData = require("./models/prepopulatedData");

// db.Property.create(propertyData,(err, newData)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log(newData);
//     }
//     process.exit();
// });

// db.Property.find({},(err,allProperties)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log(allProperties);
//     }
//     process.exit();
// })