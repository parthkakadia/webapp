Data = require("../Model/datamodel");
points = require("../Model/points");
exports.test = function (req, res) {
    var curr = new Date(Date.now());
    var lower = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate(), 6, 0, 0);
    console.log(curr.getTime() / 1000);
    console.log(curr.toUTCString());
    var up = (curr.getTime() / 1000) + 5;
    console.log("-----------");
    console.log(up);
    var upDate = new Date(up * 1000);
    console.log(upDate.toUTCString());

    /*Data.find({timestamp:{$lte:curr.getTime()/1000,$gte:lower.getTime()/1000}},{timestamp:1,_id:0}, function (err,data) {
      //console.log(data);

      var newdata=[];
      for (var i=0;i<data.length;i++)
      {
          console.log(i);
          A={
              times:data[i].timestamp,
              equa:new Date(data[i].timestamp*1000).toUTCString(),

          };
          newdata.push(A);
      }
      res.json(newdata)

    });*/
};

exports.getCurrentData = function (req, res) {
    var gap = 10;
    var dev = req.params.deviceID;
    var curr = new Date(Date.now());
    var up = (curr.getTime() / 1000) + gap / 2;
    var down = (curr.getTime() / 1000) - gap / 2;
    Data.find({deviceID: dev, timestamp: {$lte: up, $gte: down}}, function (err, data) {
        if (err) {
            res.json({
                status: "err",
                message: err
            });
        }
        if (data.length === 0) {
            console.log("none")
        }
        res.status(200).json(data);

    });

};

exports.getData = function (req, res) {
    var lowerLimit = 0;
    var dev = req.params.deviceID;
    console.log(dev);
    var curr = new Date(Date.now());
    var lower = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate(), lowerLimit, 0, 0);
    Data.find({
        deviceID: dev,
        timestamp: {$lte: curr.getTime() / 1000, $gte: lower.getTime() / 1000}
    }, function (err, data) {
        if (err) {
            res.json({
                status: "err",
                message: err
            });
        }
        res.json(data
            // {
            //status:"Success",
            //timestamp:data[0].timestamp,
            //co: data[0].co,
            //aqi:data[0].aqi,
            //cat:data[0].cat,
            //Temperature: data[0].temp
            //}
        );

    });

};

exports.getRoute = async function (req, res) {
    console.log("pressed");
    data = req.body;
    var device_r1 = [];
    var sum_arr=[];
    var loc;
    var sum_r = 0;

    for(i in data) {
        loc=data[i];
        for (j in loc) {
            //console.log(loc[j].lat);

            await points.find({"location.lat": loc[j].lat}, {
                _id: 0,
                location: 0,
                name: 0,
                __v: 0
            }, async function (err, dev) {

                if (err) {
                    console.log(err);
                } else {
                    sum_r = sum_r + dev[0].AQI;
                    //console.log(dev[0].deviceID);
                    await device_r1.push(dev[0].deviceID);
                }
            });

        }
       await sum_arr.push(sum_r/loc.length);
    }
        console.log(sum_arr);
        //console.log(device_r1);


    res.json({r1:sum_arr[0],r2:sum_arr[1],r3:sum_arr[2]})

};







