import React, {Component} from 'react';
import {TextField} from '@material-ui/core'

class NumberField extends Component{
    clamp(num, min, max) {
        return num <= min ? min : num >= max ? max : num;
    }

    render(){ 
        return (
        <TextField
            id="margin-none"
            label={this.props.label}
            variant="outlined"
            type="number"
            InputLabelProps={{
                shrink: true,
              }}
            onInput={(e)=>{ 
                e.target.value = this.clamp(e.target.value, this.props.min, this.props.max)
            }}
            style={{ width: '200px', margin: '10px', input: { margin: 10 } }}
            onChange={this.props.handleChange}
        />
  
        )
    }
}

export default NumberField;

