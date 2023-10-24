const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        default: 'DFW',
        enum: ['AUS','DFW','DEN','LAX','SAN']
        },
    arrival: Date,
}, {
    timestamps: true
});

const flightschema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest','United','Frontier']
        },
    airport: {
        type: String,
        default: 'DFW',
        enum: ['AUS','DFW','DEN','LAX','SAN']
        },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: Date,
    destinations: [destinationSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightschema);