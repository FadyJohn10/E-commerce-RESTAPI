const slugify = require('slugify');
const catModel = require('../models/categoryModel');

exports.createCategory = (req, res) => {
    const name = req.body.name;

    const newCategory = new catModel({
        name: name,
        slug: slugify(name)
    });
    newCategory.save().then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.json(err);
    })
}

exports.getCategory = (req, res) => {
    res.send();
}