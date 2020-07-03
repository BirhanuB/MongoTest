'use strict';
var express = require('express');
var router = express.Router();
var articlesModel = require('../models/articles');
/* GET home page. */
router.get('/', function (req, res) {
    try {
        //Create a new article using the Articles Model Schema
        const article = new articlesModel({ name: "New article", description: "New description" });
        //Insert article into DB
        article.save();
        //Retrieve all articles if there is any 
        articlesModel.find({}, function (err,foundArticles) {
            console.log(err);
            console.log(foundArticles);
            //Pass found articles from server to pug file
            res.render('index', { articles: foundArticles });
        });
    } catch (err) {
        console.log(err);
        res.render('index', { title: 'Express' });
    }
});

module.exports = router;
