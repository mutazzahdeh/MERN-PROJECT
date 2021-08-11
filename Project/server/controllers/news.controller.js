const { News} = require('../models/news.models');

//------------------------------- Creating news--- ---------------------------------
module.exports.createNews = (request, response) => {
    const { title, desc } = request.body;
    console.log(request.body)
    News.create({
        title,
        desc,
        
    })
        .then(news => response.json(news))
        .catch(err => response.status(400).json(err));
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
