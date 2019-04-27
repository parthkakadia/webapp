var express = require('express');
var router = express.Router();
user = require("../Model/user");

router.get('/login', function (req, res, next) {
    res.render('login', {pageTitle: 'Airis | Login', title: 'Home', message: req.flash('loginMessage')});
});
router.post('/login', function (req, res, next) {
    var username=req.body.username;
    var passworrd=req.body.password;
    user.find({username:username},function (err,user) {
        if(err){
            console.log(err);
        }else{
            if(user.length===0){
                console.log("Do Not Exist");
                res.render('login', {pageTitle: 'Airis | Login', title: 'Home', message: req.flash('loginMessage')});
            }
            else{
                res.redirect('/user/login');
            }
        }

    });

});
router.get('/register', function (req, res, next) {
    res.render('register', {pageTitle: 'Airis | Register', title: 'Home'});
});
router.post('/register', function (req, res, next) {
    user.find({
        $or: [
            {
                username: req.body.username
            },
            {
                email: req.body.email
            }
        ]
    }, function (err, userexist) {
        if(err){
            res.send("Error");
    } if(userexist.length===0) {
            if(req.body.password!==req.body.verpassword){
               res.render("register",{pageTitle: 'Airis | Register', title: 'Home',errors:"Wrong Password"});
            }else{
        var userdata = {
            name: req.body.fullname,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        };
        user.create(userdata, function (err, user) {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/user/login');
            }

        });
    }}
        else{
            res.send("User Exist");
        }
});

});



