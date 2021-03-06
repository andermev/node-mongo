var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, docum){
        if(err){
            res.send('Error!');
        }
        res.render('node', {email: docum.email});
    });   
});

router.post('/', function(req, res, next){
    var email = req.body.email;
    var user = new User({
        firstName : 'Anderson',
        lastName : 'Mejia',
        password : 'secret',
        email : email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
