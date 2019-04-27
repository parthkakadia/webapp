$(document).ready(function() {
var chart_co = c3.generate({
    bindto: '#chart_co',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, -150, 200, 300, -200, 100]
        ]
    });
}, 1000);

var chart_sox = c3.generate({
    bindto: '#chart_sox',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, -150, 200, 300, -200, 100]
        ]
    });
}, 1000);

var chart_o3 = c3.generate({
    bindto: '#chart_o3',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, -150, 200, 300, -200, 100]
        ]
    });
}, 1000);

var chart_nox = c3.generate({
    bindto: '#chart_nox',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, -150, 200, 300, -200, 100]
        ]
    });
}, 1000);

var chart_pm25 = c3.generate({
    bindto: '#chart_pm25',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, -150, 200, 300, -200, 100]
        ]
    });
}, 1000);

var chart_pm10 = c3.generate({
    bindto: '#chart_pm10',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, -150, 200, 300, -200, 100]
        ]
    });
}, 1000);
});