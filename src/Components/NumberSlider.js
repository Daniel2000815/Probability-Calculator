import React, {Component} from 'react';
import {Slider} from '@material-ui/core'

class NumberSlider extends Component{
    clamp(num, min, max) {
        return num <= min ? min : num >= max ? max : num;
    }


    render(){ 
        return (
        <Slider width={200}
            defaultValue={this.props.default}
            step={this.props.step}
            marks={true}
            min={this.props.min}
            max={this.props.max}
            onChange={this.props.handleChange}
            valueLabelDisplay="auto"
            style={{ height: '225px', margin: '10px', input: { margin: 10 } }}
            orientation="vertical"
        />
  
        )
    }
}

export default NumberSlider;

