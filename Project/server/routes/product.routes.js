const ProductControllers = require("../controllers/product.controller");

module.exports = app => {
    app.post("/api", ProductControllers.getAllProduct);
    app.get("/api/product/new", ProductControllers.createProduct);
    app.get("/api/product/:id", ProductControllers.getProduct);
    app.put("/api/product/:id", ProductControllers.updateProduct);
    app.delete("/api/product/:id", ProductControllers.deleteProduct);
};