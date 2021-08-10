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
        enum : ["inStock","outOfStock", "aponRequest"],
    },
    img: 
        { type:String,
        required: true },
        
    category : {
        type : String,
        enum : ["itemA","itemE", "itemC", "itemD","itemM", "itemB", "itemS"],
    }
    

},{ timestamps: true }) 

module.exports.Product = mongoose.model("Product", ProductSchema);

