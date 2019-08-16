const Product = require('../models/Product');

exports.getProduct = async (req, res, next) => {
  try {
    await Product.findAll().then(products => res.json({ products }));
  } catch (err) {
    console.log(err);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    await Product.create(req.body).then(product => res.json({ product }));
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      res.json({ err });
    } else {
      console.log(err);
    }
  }

  res.send('Received');
};
