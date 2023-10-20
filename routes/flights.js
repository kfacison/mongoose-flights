var express = require('express');
var router = express.Router();

const moviesCtrl = require('../controllers/flights');

//ALL ROUTES START WITH /flights

//GET /flights/new
router.get('/new', moviesCtrl.new);
router.get('/index', moviesCtrl.index);

//POST /flights
router.post('/', moviesCtrl.create);


module.exports = router;
