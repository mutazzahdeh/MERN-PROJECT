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
        
    },
    img: 
        { data: Buffer, contentType: String },
    

},{ timestamps: true }) 


module.exports.Product = mongoose.model("Product", ProductSchema);