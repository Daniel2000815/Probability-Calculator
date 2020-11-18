<html>
   <head> 
      <meta name="viewport" content="width=device-width, initial-scale=1"> 
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.min.js"></script> 
      <script type="text/javascript">
    window.onload=function(){
var ctx = document.getElementById("myChart");
var data = {
   labels: [1, 2, 3, 4, 5],
    datasets: [{
        label: "f(x) = x",
        function: function(x) { return x },
        borderColor: "rgba(75, 192, 192, 1)",
        data: [],
        fill: false
    },
    {
        label: "f(x) = x?",
        function: function(x) { return x*x },
        borderColor: "rgba(153, 102, 255, 1)",
        data: [],
        fill: false
    },
    {
        label: "f(x) = x * log(x)",
        function: function(x) { return x*Math.log(x) },
        borderColor: "rgba(255, 206, 86, 1)",
        data: [],
        fill: false
    }]
};
Chart.pluginService.register({
    beforeInit: function(chart) {
        var data = chart.config.data;
        for (var i = 0; i < data.datasets.length; i++) {
            for (var j = 0; j < data.labels.length; j++) {
               var fct = data.datasets[i].function,
                   x = data.labels[j],
                   y = fct(x);
                data.datasets[i].data.push(y);
            }
        }
    }
});
var myBarChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
    }

      </script> 
   </head> 
   <body> 
      <canvas id="myChart"></canvas>  
   </body>
</html>