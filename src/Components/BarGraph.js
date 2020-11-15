import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Select} from '@material-ui/core';

export default class BarGraph extends React.Component {
    render() {
        return (
            <div style={{float:"left",  display: "flex", justifyContent: "space-between" }}>
            <span>
            <div style={{width: "200px" , padding:"15px"}}>
            <p>P[X</p>
            <Select
                    native
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={"="}>=</option>
                    <option value={"<="}>≤</option>
                    <option value={">="}>≥</option>
            </Select>
            <p>]=</p>
            </div>
            </span>

            <span><div style={{ width: "500px" }}>
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
            </div></span>
        </div>
        );
    }
}