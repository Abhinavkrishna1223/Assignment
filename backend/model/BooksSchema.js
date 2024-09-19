const mongoose = require("mongoose");
const {Schema} = mongoose;

const bookSchemas = new Schema({
    title:{
        type:String,
    },
    author:{
        type:String,
    },
    year:{
        type:Number,
    },
    genre:{
        type:String,
    }
});

exports.Books = mongoose.model("Books", bookSchemas);