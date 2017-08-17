(function () {
    angular
        .module("PAF")          
        .controller("AnalyticsDashboardCtrl", AnalyticsDashboardCtrl);    

    function AnalyticsDashboardCtrl() {

        var vm = this;

//--------start of grouped bar chart---------//
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Volunteer Engagement Panel'
    },
    subtitle: {
        text: 'Across the various causes/interests'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Volunteer Participation'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} volunteers</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Elderly',
        data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]

    }, {
        name: 'Children',
        data: [83, 78, 98, 93, 106, 84, 105, 104, 91, 183, 106, 92]

    }, {
        name: 'Animal',
        data: [48, 38, 39, 41, 47, 48, 59, 59, 52, 65, 53, 51]

    }, {
        name: 'Environment',
        data: [42, 32, 34, 39, 52, 75, 57, 60, 47, 39, 46, 51]

    }]
});
//--------end of grouped bar chart---------//



//--------start of level of engagement circle chart---------//
Highcharts.chart('engagement', {

    chart: {
        type: 'solidgauge',
        marginTop: 50
    },

    title: {
        text: 'Level of Engagement',
        style: {
            fontSize: '18px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: 200 - labelWidth / 2,
                y: 180
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '80%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Member',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 71
        }]
    }, {
        name: 'Task Lead',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y: 22
        }]
    }, {
        name: 'Organizer',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: 8
        }]
    }]
},

/**
 * In the chart load callback, add icons on top of the circular shapes
 */
function callback() {

    // Move icon
    this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
        .attr({
            'stroke': '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            'zIndex': 10
        })
        .translate(190, 26)
        .add(this.series[2].group);

    // Exercise icon
    this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
            'M', 8, -8, 'L', 16, 0, 8, 8])
        .attr({
            'stroke': '#ffffff',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            'zIndex': 10
        })
        .translate(190, 61)
        .add(this.series[2].group);

    // Stand icon
    this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
        .attr({
            'stroke': '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            'zIndex': 10
        })
        .translate(190, 96)
        .add(this.series[2].group);
});
//--------end of level of engagement circle chart---------//






//--------start of skillsets chart---------//
Highcharts.chart('skillsets', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Skillsets Volunteers Want to Contribute'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Skillsets',
            colorByPoint: true,
            data: [{
                name: 'Befriender',
                y: 56.33
            }, {
                name: 'Logistics',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Photography',
                y: 10.38
            }, {
                name: 'Event Planning',
                y: 4.77
            }, {
                name: 'Emcee',
                y: 0.91
            }, {
                name: 'Other',
                y: 0.2
            }]
        }]
    });

//--------end of skillsets chart---------//



//--------start of volunteer participation chart---------//

Highcharts.chart('participation', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Volunteer Participation, by gender & age'
    },

    xAxis: {
        categories: ['more than 5 times for past 1 year', '1 - 5 times for past 1 year', 'Not engaged for past 1 year']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of Volunteers'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: '(M) Below 21',
        data: [50, 140, 0],
        stack: 'male'
    }, {
        name: '(M) 21 - 35',
        data: [32, 100, 20],
        stack: 'male'
    }, {
        name: '(M) 36 - 50',
        data: [01, 132, 4],
        stack: 'male'
    }, {
        name: '(M) Above 50',
        data: [50, 32, 0],
        stack: 'male'
    }, {
        name: '(F) Below 21',
        data: [35, 102, 15],
        stack: 'female'
    }, {
        name: '(F) 21 - 35',
        data: [62, 130, 4],
        stack: 'female'
    }, {
        name: '(F) 36 - 50',
        data: [36, 130, 9],
        stack: 'female'
    }, {
        name: '(F) Above 50',
        data: [20, 72, 6],
        stack: 'female'
    }]
});

//--------end of volunteer participation chart---------//






//--------start of heatmap chart---------//
Highcharts.chart('heatmap', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },


    title: {
        text: 'Average Volunteer App Usage'
    },

    xAxis: {
        categories: ['0800', '1100', '1400', '1700', '2000', '2300', '0200', '0500']
    },

    yAxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
        title: null
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> GMT+8 <br><b>' +
                this.point.value + '</b> users <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
        }
    },

    series: [{
        name: 'Average # of users per period',
        borderWidth: 1,
        data: [[0, 0, 50], [0, 1, 19], [0, 2, 75], [0, 3, 24], [0, 4, 67], [0, 5, 164],[0, 6, 72], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48],[1, 5, 230],[1, 6, 312], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [2, 5, 150],[2, 6, 65],[3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [3, 5, 216],[3, 6, 200],[4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115],[4, 5, 312],[4, 6, 120], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120],[5, 5, 349],[5, 6, 200], [6, 0, 1], [6, 1, 0], [6, 2, 25], [6, 3, 34], [6, 4, 48],[6, 5, 50],[6, 6, 25], [7, 0, 1], [7, 1, 1], [7, 2, 0], [7, 3, 0], [7, 4, 3],[7, 5, 0],[7, 6, 0]],
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }]

});
//--------end of heatmap chart---------//





    } // END AnalyticsDashboardCtrl

})();