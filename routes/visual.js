var express = require('express');
var router = express.Router();
Data = require("../Model/datamodel");
var request = require("request");



router.get('/:deviceID', function(req, res, next) {
    if(req.params.deviceID==='history'){
        res.redirect('/');
    }
    var uri = 'http://localhost:3000/data/get/'+req.params.deviceID;
    var uri1 = 'http://localhost:3000/data/getCur/'+req.params.deviceID;
            res.render('visual', { pageTitle: 'Airis', url:uri, url1:uri1});

});
router.get('/history/:deviceID', function (req,res) {

    res.render('past',{pageTitle: 'Airis | History', title:'History'});
});

module.exports = router;