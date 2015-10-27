var express = require('express');
var router = express.Router();
var db = require("sequelize-tools").db
var models  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
    models.Masjid.findAll()
    .then(function(masjids) {
        res.json(masjids);
    });
});

router.get('/create', function(req, res, next) {
    models.Masjid.create({
    name: 'test'//req.body.name
  }).then(function() {
    res.redirect('/');
  });
})

module.exports = router;
