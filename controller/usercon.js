const Model = require("../model/user"); // Assuming you have a "users" model
const User = Model.User;

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    console.log("Retrieved users");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
    console.log("Created user:", newUser);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err: "Failed to create user" });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const foundUser = await User.findById(id);
    if (!foundUser) {
      res.sendStatus(404);
    } else {
      res.json(foundUser);
      console.log("Retrieved user:", foundUser);
    }
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err });
  }
};

const replaceUser = async (req, res) => {
  const id = req.params.id;
  try {
    const replacedUser = await User.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.json(replacedUser);
    console.log("Replaced user:", replacedUser);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err: "Failed to replace user" });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(updatedUser);
    console.log("Updated user:", updatedUser);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err: "Failed to update user" });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete({ _id: id });
    res.json(deletedUser);
    console.log("Deleted user:", deletedUser);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err: "Failed to delete user" });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  replaceUser,
  updateUser,
  deleteUser,
};
