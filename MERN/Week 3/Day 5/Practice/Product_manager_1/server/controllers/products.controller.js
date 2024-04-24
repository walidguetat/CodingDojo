const Products = require('../models/products.model');
 
module.exports.findAllProductss = (req, res) => {
    Products.find()
        .then((allDaProducts) => {
            res.json({ Products: allDaProducts })
        })
        .catch((err) => {
            res.json(err)
        });
}
 
module.exports.findOneSingleProducts = (req, res) => {
    Products.findOne({ _id: req.params.id })
        .then(oneSingleProducts => {
            res.json({ Products: oneSingleProducts })
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.createNewProducts = (req, res) => {
    Products.create(req.body)
        .then(newlyCreatedProducts => {
            res.json({ Products: newlyCreatedProducts })
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.updateExistingProducts = (req, res) => {
    Products.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProducts => {
            res.json({ Products: updatedProducts })
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.deleteAnExistingProducts = (req, res) => {
    Products.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });}
