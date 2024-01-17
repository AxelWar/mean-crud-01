const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  try {
    let product;

    product = new Product(req.body);

    await product.save();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

exports.getProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ msg: "Product does not exist" });
    }

    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ msg: "Product does not exist" });
    }

    await Product.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "Product successfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, category, location, price } = req.body;
    let product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ msg: "Product does not exist" });
    }

    product.name = name;
    product.category = category;
    product.location = location;
    product.price = price;

    product = await Product.findOneAndUpdate({ _id: req.params.id }, product, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};
