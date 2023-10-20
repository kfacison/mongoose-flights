const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
};

function newFlight(req, res){
    res.render('flights/new', { errorMsg: '' })
}

async function create(req, res){
    console.log(req.body.depart)
    
    try {
        await Flight.create(req.body);
        res.redirect('/flights/index');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
}