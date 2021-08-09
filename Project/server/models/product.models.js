const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	name:  {
        type: String,
    },
	code: {
        type: Number
    } ,
    price: {
        type: Number
    } ,
    dimension: {
        type: Number
    } ,
    // status: {
    //     out of stock
    // in stock
    // } ,
    img: 
        { data: Buffer, contentType: String },

},{ timestamps: true }) 


module.exports.Product = mongoose.model("Product", ProductSchema);