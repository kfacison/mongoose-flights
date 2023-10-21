const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const flightschema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest','United','Frontier']
        },
    airport: {
        type: String,
        default: 'DFW',
        enum: ['AUS', 'DFW','DEN','LAX','SAN']
        },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: '2024-10-31T11:00'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightschema);