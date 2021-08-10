const ProductControllers = require("../controllers/product.controller");
const NewsControllers = require("../controllers/news.controller");

module.exports = app => {
    app.get("/api", ProductControllers.getAllProduct);
    app.post("/api/product/new", ProductControllers.createProduct);
    app.get("/api/product/:id", ProductControllers.getProduct);
    app.put("/api/product/:id", ProductControllers.updateProduct);
    app.delete("/api/product/:id", ProductControllers.deleteProduct);

<<<<<<< HEAD:Project/server/routes/product.routes.js
    app.get("/api/news", ProductControllers.getAllNews);
    app.post("/api/news/new", ProductControllers.createNews);
    app.get("/api/news/:id", ProductControllers.getNews);
    app.put("/api/news/:id", ProductControllers.updateNews);
    app.delete("/api/news/:id", ProductControllers.deleteNews);
=======
    app.get("/api", NewsControllers.getAllNews);
    app.post("/api/news/new", NewsControllers.createNews);
    app.get("/api/news/:id", NewsControllers.getNews);
    app.put("/api/news/:id", NewsControllers.updateNews);
    app.delete("/api/news/:id", NewsControllers.deleteNews);
>>>>>>> 8d8ab7a1f0e2a93ae2fbfac9ac3fe22e12fe1169:Project/server/routes/route.routes.js
    
}