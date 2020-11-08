import React, {useState, Component} from 'react';
import {Select, MenuItem, TextField} from "@material-ui/core";


class Selector extends Component{

    render(){
        return (<div>
            
            <Select onChange={this.props.handleChange} options={this.props.options} fullWidth>
                <MenuItem value={"B"}>Binomial</MenuItem>
                <MenuItem value={"BN1"}>Binomial Negativa (v1)</MenuItem>
                <MenuItem value={"BN2"}>Binomial Negativa (v2)</MenuItem>
                <MenuItem value={"G"}>Geométrica</MenuItem>
                <MenuItem value={"Pc"}>Pascal</MenuItem>
                <MenuItem value={"H"}>Hipergeométrica</MenuItem>
                <MenuItem value={"P"}>Poisson</MenuItem>     
            </Select>           
        </div>
        )
    }
}

export default Selector;
