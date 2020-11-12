import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import { render } from 'react-dom';

class BarGraph2 {

    render() {
        return (
            <div>
            <h5>{this.props.poll.name}</h5>
            <span>Last vote at Thu Jan 24 2019 09:53</span>
            <Bar
                className="animated fadeIn"
                data={this.props.data}
                width={100}
                height={350}
            /> 
            </div>
        )
    }

    
}

export default BarGraph2;