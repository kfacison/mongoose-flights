const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');
//ALL ROUTES START WITH /flights

//GET /flights/new
router.get('/new', flightsCtrl.new);
router.get('/index', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);
router.get('/:id/tickets/new', flightsCtrl.newTickets);

//POST /flights
router.post('/', flightsCtrl.create);
router.post('/:id/ticket',flightsCtrl.addTicket);

module.exports = router;
