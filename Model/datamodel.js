var mongoose = require('./config');

var datumSchema=mongoose.Schema({
    deviceID:{
       type: String,
       required: true
   },
    timestamp:{
       type: Number,
       required: true
   },
    temp:{
        type: Number,
        required: true
    },
    co:{
        type: Number,
        required: true
    },
    sox:{
        type: Number,
        required: true
    },
    nox:{
        type: Number,
        required: true
    },
    pm25:{
        type: Number,
        required: true
    },
    pm10:{
        type: Number,
        required: true
    },
    aqi:{
        type: Number,
        required: true
    },
    cat:{
        type:Number,
        required: true
    }
});

var Datum = module.exports=mongoose.model('datum', datumSchema,"rasp");