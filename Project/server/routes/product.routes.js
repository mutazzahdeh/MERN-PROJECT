const ProductControllers = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api", ProductControllers.findAllJokes);
    app.get("/api/product/:id", ProductControllers.findOneSingleJoke);
    app.post("/api/product", ProductControllers.createNewjoke);
    app.put("/api/product/:id", ProductControllers.updateExistingjoke);
    app.delete("/api/product/:id", ProductControllers.deleteAnExistingjoke);
};