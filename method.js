// const products = require("./data.json");
// const mongoose = require("mongoose");
const Model = require("./model/products.js");
const product = Model.Product;
////////////////////////////////
const get = async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
    console.log("get products");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const create = async (req, res) => {
  const newproduct = new product(req.body);
  await newproduct.save();
  res.sendStatus(201);
  res.json.newproduct;
};

const specific = async (req, res) => {
  const id = req.params.id;
  const Oneproduct = await product.findById(id);
  if (!Oneproduct) {
    res.sendStatus(404);
  } else {
    res.json(Oneproduct);
    console.log("get products");
  }
};

const replece = async (req, res) => {
  try {
    const id = req.params.id;
    const productIndex = await product.findOneAndReplace(
      { _id: id },
      req.body,
      { new: true }
    );
    res.json(productIndex);
    console.log("PUT products");
  } catch (err) {
    console.log({ err });
    res.json({ err });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const productIndex = await product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(productIndex);
    console.log("PATCH products");
  } catch (err) {
    console.log({ err });
    res.json({ err: err });
  }
};

const deleted = async (req, res) => {
  try {
    const id = req.params.id;
    const productIndex = await product.findByIdAndDelete(
      { _id: id },
      { new: false }
    );
    res.json(productIndex);
    console.log("DELETE products");
  } catch (err) {
    console.log({ err });
  }
};

module.exports = {
  get,
  specific,
  create,
  replece,
  update,
  deleted,
};
