var series1 = {
  name: 'against usd',
  data: [74.3, 75.8, 73.1, 77.9, 82.6]
};

var series2 = {
  name: 'against cad',
  data: [60.2, 63.9, 61.1, 65.9, 63.2]
};



Highcharts.chart('chart-container', {
  chart: {
    type: 'line'
  },
  title: {
    text: 'My Chart Title'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  },
  yAxis: {
    title: {
      text: 'rupee value'
    }
  },
  series: 
    [series1, series2]
  
});
