var express = require('express');
var router = express.Router();
let apiRoutes = require("../Controller/endpointController");
let mapsave=require("./map");
let mapapi = require("../Controller/map");

router.get('/', function (req, res) {
    res.redirect('/data/map');
});

router.use('/test', apiRoutes.test);
router.use('/get/:deviceID',apiRoutes.getData);
router.use('/getCur/:deviceID',apiRoutes.getCurrentData);
router.use('/map',mapapi.test);
router.use('/save',mapsave.save);
router.use('/get',mapsave.get);
router.use('/getRoute', apiRoutes.getRoute);
module.exports = router;