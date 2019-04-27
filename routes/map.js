var express = require('express');
var router = express.Router();
var points=require('../Model/points');

exports.save=function (req,res,next) {
    var point={
        location:req.body.location,
        name:req.body.name
    };
    console.log(point);
    /*points.create(point,function (err,point) {
        if(err){
            console.log("error");
        }else
            console.log(point);

    });*/

};

exports.get=function (req,res) {
   points.find({},function (err,data) {
       if(err){
           console.log(err);
       }
       //console.log(data);
       res.json(data);

   });


};
