import React, {Component} from 'react';
import {TextField} from '@material-ui/core'

class CalcProbInput extends Component{

    symbols = ['<', '≤', '=', '>', '≥'];

    render(){
        return(
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {this.symbols.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
        )
    }

}

export default CalcProbInput;