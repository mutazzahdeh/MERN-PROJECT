const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	name:  {
        type: String,
    },
	code: {
        type: String
    } ,
    price: {
        type: Number
    } ,
    desc: {
        type: String
    } ,
    status:{ 
        type : String,
        default : "inStock"
        
    },
    img: 
        { data: Buffer, contentType: String },
        
    category : {
        type : String,
        enum : ["itemA","itemE", "itemC", "itemD","itemM", "itemB", "itemS"],
        default: "itemA"
    }
    

},{ timestamps: true }) 

const NewsSchema = new mongoose.Schema({
	title:  {
        type: String,
    },
	desc: {
        type: String
    } ,
    date: {
        type: Date
    } 
},{ timestamps: true }) 


module.exports.Product = mongoose.model("Product", ProductSchema);

module.exports.News = mongoose.model("News", NewsSchema);