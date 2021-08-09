const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//------------------------------- Creating a product ---------------------------------
module.exports.createProduct = (request, response) => {
    const { name, date,status } = request.body;
    console.log(request.body)
    Product.create({
        name,
        date,
        status
    })
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err));
}
//---------------------------------------------------------------------------------

//------------------------------- Getting All products------------------------------
module.exports.getAllProduct = (request, response) => {
    Product.find({}).sort({ date: 1 })
    .then( sortedProducts =>{ response.json(sortedProducts)})
    .catch(err => response.json(err))
    }
//-----------------------------------------------------------------------------------

//------------------------------ Get One Product--------------------------------------
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
//-----------------------------------------------------------------------------------

//------------------------------ Update Product --------------------------------------
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true,runValidations:true})
        .then(productUpdated => response.json(productUpdated))
        .catch(err => response.status(400).json(err))
}
//-----------------------------------------------------------------------------------


//------------------------------ Delete a product --------------------------------------
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
//-----------------------------------------------------------------------------------