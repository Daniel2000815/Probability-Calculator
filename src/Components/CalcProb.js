import React, {Component} from 'react';
import {Slider} from '@material-ui/core'

class CalcProb extends Component{

    render(){ 
        return (
            <div style={{float:"right", alignContent:"center",verticalAlign:"middle", padding:"50px" , display: "flex" }}>
            <p>PROB: {this.props.result}</p>

            <Slider style={{width:"200px"}}
                min={this.props.min}
                max={this.props.max}
                value={this.props.range}
                onChange={this.props.handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                valueLabelDisplay="on"
            />
            </div>
  
        )
    }
}

export default CalcProb;

