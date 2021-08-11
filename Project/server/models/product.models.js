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
        enum : ["puzzle","العاب خشبية", "أثاث", "طاولات","ألواح", "زينة ميلاد"],
        
    }
    

},{ timestamps: true }) 

module.exports.Product = mongoose.model("Product", ProductSchema);

