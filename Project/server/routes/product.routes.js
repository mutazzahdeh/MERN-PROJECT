const ProductControllers = require("../controllers/product.controller");
module.exports = app => {
    app.get("/api", ProductControllers.getAllProduct);
    app.post("/api/product/new", ProductControllers.createProduct);
    app.get("/api/product/:id", ProductControllers.getProduct);
    app.put("/api/product/:id", ProductControllers.updateProduct);
    app.delete("/api/product/:id", ProductControllers.deleteProduct);

    app.get("/api/news", ProductControllers.getAllNews);
    app.post("/api/news/new", ProductControllers.createNews);
    app.get("/api/news/:id", ProductControllers.getNews);
    app.put("/api/news/:id", ProductControllers.updateNews);
    app.delete("/api/news/:id", ProductControllers.deleteNews);
    
};