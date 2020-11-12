import React from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarGraph extends React.Component {
    render() {
        return (
            <div style={{height: "500px", width: "500px"}}>
                <Bar
                    data={this.props.data}
                    options={{
                        legend:{
                            display: false
                        },
                       responsive: true,
                       title: {text: 'FUNCIÓN DISTRIBUCIÓN', display: true},
                       scales:{
                           yAxes:[
                               {
                                   ticks:{
                                        autoSkip: true,
                                        beginAtZero: true,
                                        min: 0,
                                   }
                               }
                           ]
                       }
                    }}
                />
            </div>
        );
    }
}