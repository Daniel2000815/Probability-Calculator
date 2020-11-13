import React from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarGraph extends React.Component {
    render() {
        return (
            <div style={{float:"left", height: "250px",width: "500px", display: "flex", justifyContent: "space-between"  }}>
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