import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';

const LineGraph = ({_labels, _data}) =>{
    const [chartData, setChartData] = useState({});

    const chart = () =>{
        setChartData({
            labels: _labels,
            datasets: [
                {
                    label: 'level jaja',
                    data: _data,
                    backgroundColor: 'rgba(75,192,192, 0.6)',
                    highlightStroke: "rgba(220,220,220,1)",
                    borderWidth: 0
                }
            ]
        })
    }

    useEffect(()=> {
        chart()
    }, [])


    return(
        <div className="App">
        <div style={{height: "500px", width: "500px"}}>
            <Bar data={chartData} options={{
                legend:{
                    display: false
                },
               responsive: true,
               title: {text: 'FUNCIÓN DE DISTRIBUCIÓN', display: true},
               scales:{
                   yAxes:[
                       {
                           ticks:{
                               autoSkip: true,
                               maxTicksLimit: 10,
                               beginAtZero: true
                           }
                       }
                   ]
               }
            }}/>
        </div>
        </div>
    )
}

export default LineGraph;