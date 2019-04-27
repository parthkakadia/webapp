var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var fs = require("fs");
var cors=require("cors");
var request=require('request');



var baseURL="https://apis.mapmyindia.com/advancedmaps/v1/";
var lic=""; //Add your Licence key here
var resource="route_adv";
var mode="driving";
var alternate="alternatives=3";
var step = "step=flase";
var start="";
var end="";
var reqURL=baseURL+lic+"/"+resource+"/"+mode+"/"+start+";"+end+"?"+step+"&"+alternate;
exports.test=function (req,res) {
    res.render('map',{title:"Airis",pagetitle:"Airis | Map"});
};