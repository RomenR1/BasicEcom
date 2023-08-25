const express = require("express");
const UserController = require("../controller/usercon"); // Update the import to your user controller
const UserRouter = express.Router();

UserRouter.get("/", UserController.getUsers)
  .post("/", UserController.createUser)
  .get("/:id", UserController.getUserById)
  .put("/:id", UserController.replaceUser)
  .patch("/:id", UserController.updateUser)
  .delete("/:id", UserController.deleteUser);

exports.UserRouter = UserRouter;
