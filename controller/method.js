const Model = require("../model/products");
const Product = Model.Product;

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
    console.log("Retrieved products");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
    console.log("Created product:", newProduct);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err: "Failed to create product" });
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const foundProduct = await Product.findById(id);
    if (!foundProduct) {
      res.sendStatus(404);
    } else {
      res.json(foundProduct);
      console.log("Retrieved product:", foundProduct);
    }
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err });
  }
};

const replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const replacedProduct = await Product.findOneAndReplace(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json(replacedProduct);
    console.log("Replaced product:", replacedProduct);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err: "Failed to replace product" });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedProduct);
    console.log("Updated product:", updatedProduct);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err: "Failed to update product" });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete({ _id: id });
    res.json(deletedProduct);
    console.log("Deleted product:", deletedProduct);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ err: "Failed to delete product" });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
