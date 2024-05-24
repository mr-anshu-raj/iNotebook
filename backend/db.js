const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://notebook:yfkTbYMafNdfhLCp@cluster0.pxnaa9o.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;