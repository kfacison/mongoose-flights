const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');
//ALL ROUTES START WITH /flights

//GET /flights/new
router.get('/new', flightsCtrl.new);
router.get('/index', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);

//POST /flights
router.post('/', flightsCtrl.create);

module.exports = router;
