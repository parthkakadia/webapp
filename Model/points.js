var mongoose = require('./config');


var point = mongoose.Schema({
    location: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    },
    name: {
        type: String,
        required: true
    },
    deviceID: {
        type: String,
        required: true
    },
    AQI: {
        type: Number,
        required: true
    }
});


var Point = module.exports = mongoose.model('point', point, "map");