const ProductControllers = require("../controllers/product.controller");
const NewsControllers = require("../controllers/news.controller");

module.exports = app => {
    app.get("/api", ProductControllers.getAllProduct);
    app.post("/api/product/new", ProductControllers.createProduct);
    app.get("/api/product/:id", ProductControllers.getProduct);
    app.put("/api/product/:id", ProductControllers.updateProduct);
    app.delete("/api/product/:id", ProductControllers.deleteProduct);

    app.get("/api/allnews", NewsControllers.getAllNews);
    app.post("/api/news/new", NewsControllers.createNews);
    app.get("/api/news/:id", NewsControllers.getNews);
    app.put("/api/news/:id", NewsControllers.updateNews);
    app.delete("/api/news/:id", NewsControllers.deleteNews);
    
}