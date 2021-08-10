const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
	title:  {
        type: String,
    },
	desc: {
        type: String
    } 
},{ timestamps: true }) 

module.exports.News = mongoose.model("News", NewsSchema);