var mongoose = require('mongoose');
var uri="";
mongoose.connect(uri,{useNewUrlParser:true}, function (err) {
    if(err){
        console.log(err);
    }

});
var db = mongoose.connection;

module.exports=mongoose;