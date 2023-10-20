const Flight = require('../models/flight');

module.exports = {
    new: newMovie,
    create,
    index
};

function newMovie(req, res){
    res.render('flights/new.ejs', { errorMsg: '' })
}

async function create(req, res){
    req.body.nowShowing = !!req.body.nowShowing;
    req.body.cast = req.body.cast.trim();
    if (req.body.cast) {
        req.body.cast = req.body.cast.split(/\s*,\s*/);
    }
    try {
        await Flight.create(req.body);
        res.redirect('/flights/index.ejs');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index.ejs', { flights });
}