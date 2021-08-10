const { Product } = require('../models/product.models');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//------------------------------- Creating a product ---------------------------------
module.exports.createProduct = (request, response) => {
    const { name, code,price,desc,img } = request.body;
    console.log(request.body)
    Product.create({
        name,
        code,
        price,
        desc,
        img,
        category:"itemA",
        status: "inStock"
    })
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err));
}
//---------------------------------------------------------------------------------

//------------------------------- Getting All products------------------------------
module.exports.getAllProduct = (request, response) => {
    Product.find({})
        .then(product => response.json(product))
        .catch(err => response.json(err))
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
<<<<<<< HEAD

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//------------------------------- Creating news--- ---------------------------------
module.exports.createNews = (request, response) => {
    const { title, desc } = request.body;
    console.log(request.body)
    News.create({
        title,
        desc,
        
    })
        .then(news => {response.json(news);console.log("@@@@@@@@")})
        .catch(err => {response.status(400).json(err);console.log("@@@@@@@@");});
}
//---------------------------------------------------------------------------------

//------------------------------- Getting All news------------------------------
module.exports.getAllNews = (request, response) => {
    News.find({})
        .then(news => response.json(news))
        .catch(err => response.json(err))
    }
//-----------------------------------------------------------------------------------

//------------------------------ Get One News--------------------------------------
module.exports.getNews = (request, response) => {
    News.findOne({_id:request.params.id})
        .then(news => response.json(news))
        .catch(err => response.json(err))
}
//-----------------------------------------------------------------------------------

//------------------------------ Update News --------------------------------------
module.exports.updateNews = (request, response) => {
    News.findOneAndUpdate({_id:request.params.id},request.body,{new:true,runValidations:true})
        .then(newsUpdated => response.json(newsUpdated))
        .catch(err => response.status(400).json(err))
}
//-----------------------------------------------------------------------------------


//------------------------------ Delete News --------------------------------------
module.exports.deleteNews = (request, response) => {
    News.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
//-----------------------------------------------------------------------------------
=======
>>>>>>> 8d8ab7a1f0e2a93ae2fbfac9ac3fe22e12fe1169
