$(function () {
        
            var data1 = {
                name: 'Men in London',
                data: [2.4, 2.6, 2.5, 4.5, 2.2, 4.5, 3.0, 2.4, 3.5, 4.5, 2.2, 3.4, 3.0, 0.6, 2.5, 4.5, 1.2, 2.5, 3.0, 0.6, 0.5, 4.5, 1.2, 2, 4.5, 2.2, 1, 4.0, 1.6, 0.5, 4.5, 1.2, 0.5]
            },
            data2 = {
                name: 'Male corporate',
                data: [3.0, 3.6, 3.5, 3.5, 3.2, 4.5, 3.0, 3.4, 3.5, 4.5, 6.2, 3.4, 3.0, 2.6, 3.5, 4.5, 3.2, 3.5, 3.0, 2.6, 2.5, 4.5, 2.2, 2, 4.5, 1.2, 1, 3.0, 0.6, 0.5, 0.5, 1.2, 5.7]
            },
            data4 = {
                name: 'Male',
                data: [2.0, 4.6, 0.5, 6.5, 1.2, 4.5, 3.0, 0.4, 0.5, 4.5, 1.2, 3.4, 3.0, 0.6, 0.5, 4.5, 1.2, 3.5, 3.0, 0.6, 0.5, 4.5, 1.2, 2, 4.5, 1.2, 1, 3.0, 0.6, 0.5, 4.5, 1.2, 1.5]
            },
            data3 = {
                name: 'UK average',
                data: [2.0, 1.6, 5.5, 6.5, 5.2, 2.5, 3.0, 3.4, 0.5, 4.5, 1.2, 3.4, 3.0, 4.6, 0.5, 4.5, 4.2, 3.5, 3.0, 0.6, 6.5, 3.5, 2.2, 2, 4.5, 1.2, 1, 3.0, 0.6, 0.5, 4.5, 1.2, 0.6]
            }; 

            var myData = [];

            
            var chart = $('#jobseekers-chart').highcharts({
            chart: {
                type: 'line',
                margin: [null, 90, null, null]
            },
            colors: [
                '#f68b23',
                '#164366',
                '#d8b728'
            ],
            title: {
                text: 'Jobseekers claim over the past five years',
                align: 'left',
                margin: 50, 
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#505050'
                }
            },
            xAxis: {
                categories: [],
                lineColor: '#999999',
                lineWidth: 2,
                gridLineColor: '#CCCCCC',
                tickColor: '#CCCCCC',
                tickInterval: 12,
                gridLineWidth: 1,
                showLastLabel: true,
                labels: {
                    enabled: true,
                    //step: 12,
                    formatter : function() {
                        return 2001 + Math.floor(this.value/12);
                    }
                }
                
            },
            yAxis: {
                lineColor: '#CCCCCC',
                lineWidth: 1,
                title: {
                    text: '%',
                    rotation: 0,
                    align: 'high',
                    offset: 0,
                    x: -5,
                    y: -10,
                    style: {
                        fontSize: '14px',
                        color: '#505050',
                        fontWeight: 'regular'
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '%'
            },
            legend: {
                enabled: true,
                floating: true,
                align: 'left',
                verticalAlign: 'top',
                x: 15,
                y: 35,
                borderWidth: 0
            },
            plotOptions: {
                line: {
                    marker: {
                    enabled: false,
                    lineColor: null,
                    symbol: 'circle',
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                    },
                },
                series: {
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        align: 'left',
                        x: 0,
                        y: 0,
                        crop: false,
                        padding: 30,
                        formatter: function() {

                            if (this.point.x == this.series.data.length - 1) {
                                //console.log(this.point.plotY)
                                return '<div class="label"><p style="margin: 0; padding: 0;">' + this.series.name + '</p><p style="font: bold 18px/16px Arial; color:' + this.series.color + ';">'+ this.y+'%</p></div>';
                            } else {
                                return null;
                            }
                        }
                    }
                }
            },

            credits: {
                enabled: false   
            },
            series: [data3]
        });
        $('button.b1').click(function() {
            var chart = $('#jobseekers-chart').highcharts();
            chart.addSeries(data1);
        });
        $('button.b2').click(function() {
            var chart = $('#jobseekers-chart').highcharts();
            chart.addSeries(data2);
        });
        $('button.b3').click(function() {
            var chart = $('#jobseekers-chart').highcharts();
            chart.addSeries(data4);
        });
    });
    
