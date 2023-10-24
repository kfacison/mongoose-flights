const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    newTickets,
    addTicket
};

function newFlight(req, res){
    res.render('flights/new', { errorMsg: '' })
}

async function create(req, res){
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

async function show(req, res){
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({flight: flight._id});
    res.render('flights/show', {flight, tickets});
}

async function newTickets(req, res){
    const flight = await Flight.findById(req.params.id);
    res.render('flights/newTickets',{flight});
}

async function addTicket(req, res){
    const flight = await Flight.findById(req.params.id);
    const ticket = await Ticket.find({flight: flight._id});
    console.log(req.body);
    ticket.push(req.body)
    await ticket.save();
    res.redirect(`/flight/${flight._id}`);
}