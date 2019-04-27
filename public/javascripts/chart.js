var fields = ['co', 'sox', 'o3', 'nox', 'pm25', 'pm10'];
var request = new XMLHttpRequest();
var data;
var gauge;
var chart_co;
var chart_sox;
var chart_pm25;
var chart_pm10;
var chart_o3;
var chart_nox;

request.open('GET', "<%= uri %>", true);

request.onload = function () {
    data = JSON.parse(this.response);


    chart_co = c3.generate({
        bindto: '#chart_co',
        data: {
            json: data,
            keys: {
                x: 'timestamp',
                xFormat: '%Y-%m-%d %H:%M:%S',
                value: fields[0]
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%H:%M:%S' // how the date is displayed
                }
            }
        }
    });
    chart_co.flush();
    chart_sox = c3.generate({
        bindto: '#chart_sox',
        data: {
            json: data,
            keys: {
                x: 'timestamp',
                xFormat: '%Y-%m-%d %H:%M:%S',
                value: fields[1]
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%H:%M:%S' // how the date is displayed
                }
            }
        }
    });
    chart_sox.flush();
    chart_o3 = c3.generate({
        bindto: '#chart_o3',
        data: {
            json: data,
            keys: {
                x: 'timestamp',
                xFormat: '%Y-%m-%d %H:%M:%S',
                value: fields[2]
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%H:%M:%S' // how the date is displayed
                }
            }
        }
    });
    chart_o3.flush();
    chart_nox = c3.generate({
        bindto: '#chart_nox',
        data: {
            json: data,
            keys: {
                x: 'timestamp',
                xFormat: '%Y-%m-%d %H:%M:%S',
                value: fields[3]
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%H:%M:%S' // how the date is displayed
                }
            }
        }
    });
    chart_nox.flush();
    chart_pm25 = c3.generate({
        bindto: '#chart_pm25',
        data: {
            json: data,
            keys: {
                x: 'timestamp',
                xFormat: '%Y-%m-%d %H:%M:%S',
                value: fields[4]
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%H:%M:%S' // how the date is displayed
                }
            }
        }
    });
    chart_pm25.flush();
    chart_pm10 = c3.generate({
        bindto: '#chart_pm10',
        data: {
            json: data,
            keys: {
                x: 'timestamp',
                xFormat: '%Y-%m-%d %H:%M:%S',
                value: fields[5]
            }
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%H:%M:%S' // how the date is displayed
                }
            }
        }
    });
    chart_pm10.flush();

    gauge = c3.generate({
        bindto: '#gauge',
        data: {
            json: [data[data.length - 1]],
            keys: {
                value: ['aqi']
            },
            type: 'gauge',
            onmouseover: function (d, i) {
                console.log("onmouseover", d, i);
            },
            onmouseout: function (d, i) {
                console.log("onmouseout", d, i);
            }
        },
        gauge: {
            label: {
                format: function (value, ratio) {
                    return value.toFixed(0);
                },
                show: false // to turn off the min/max labels.
            },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
            max: 500, // 100 is default
            //units: '',
//    width: 39 // for adjusting arc thickness
        },
        color: {
            pattern: ['#60B044', '#F6C600', '#F97600', '#FF0000', '#C54066', '#460a18'], // the three color levels for the percentage values.
            threshold: {
                unit: 'value', // percentage is default
                max: 500, // 100 is default
                values: [50, 100, 150, 200, 300, 500]
            }
        },
        size: {
            height: 180
        }

    });
    gauge.flush();
};
request.send();
