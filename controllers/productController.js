const db = require('../models');

// create main Model
const Product = db.products;
const Review = db.reviews;

// main Work

const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }
    const product = await Product.create(info);
    res.status(200).send(product); 
    console.log(product);
}

const getAllProducts = async (req, res) => {
    const products = await Product.findAll({
        attributes: ['title', 'price']
    });
    res.status(200).send(products);
    console.log(products);
}

const getSingleProduct = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    // or 
    // const product = await Product.findOne({ where: { id: req.params.id } });
    res.status(200).send(product);
    console.log(product);
}

const updateProduct = async (req, res) => {
    let id = req.params.id;
    const product = await Product.update(req.body, { where: { id: id } });
    res.status(200).send(product);
}

const deleteProduct = async (req, res) => {
    let id = req.params.id;
    await Product.destroy({ where: { id: id } });
    res.status(200).send('Product deleted successfully');
}

const getPublishedProduct = async (req, res) => {
    const products = await Product.findAll({ where: { published: true } });
    res.status(200).send(products);
}



module.exports = {
    addProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}