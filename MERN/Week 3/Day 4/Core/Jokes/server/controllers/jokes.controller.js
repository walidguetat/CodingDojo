const Jokes = require('../models/jokes.model');
 
module.exports.findAllJokess = (req, res) => {
    Jokes.find()
        .then((allDaJokess) => {
            res.json({ jokes: allDaJokess })
        })
        .catch((err) => {
            res.json(err)
        });
}
 
module.exports.findOneSingleJokes = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneSingleJokes => {
            res.json({ jokes: oneSingleJokes })
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.createNewJokes = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJokes => {
            res.json({ jokes: newlyCreatedJokes })
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.updateExistingJokes = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJokes => {
            res.json({ jokes: updatedJokes })
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.deleteAnExistingJokes = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });}
