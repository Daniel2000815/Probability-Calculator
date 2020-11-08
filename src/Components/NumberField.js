import React, {useState, Component} from 'react';
import {TextField} from "@material-ui/core";


class NumberField extends Component{
    
    render(){ 
        return (
        <TextField
          label="None"
          id="margin-none"
          label={this.props.label}
          variant="outlined"
          type={Number}
          onChange={this.props.handleChange}
        />
        )
    }
}

export default NumberField;

