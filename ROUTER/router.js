// Routes using imported controller functions
const express = require("express");
const ProductController = require("../controller/method");
const PoroductRouter = express.Router();

PoroductRouter.get("/", ProductController.getProducts)
  .post("/", ProductController.createProduct)
  .get("/:id", ProductController.getProductById)
  .put("/:id", ProductController.replaceProduct)
  .patch("/:id", ProductController.updateProduct)
  .delete("/:id", ProductController.deleteProduct);

exports.PoroductRouter = PoroductRouter;
