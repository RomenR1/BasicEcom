// Routes using imported controller functions
const express = require("express");
const ProductController = require("../method");
const PoroductRouter = express.Router();

PoroductRouter.get("/", ProductController.get)
  .get("/:id", ProductController.specific)
  .post("/", ProductController.create)
  .put("/:id", ProductController.replece)
  .patch("/:id", ProductController.update)
  .delete("/:id", ProductController.deleted);

exports.PoroductRouter = PoroductRouter;
