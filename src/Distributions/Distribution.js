import React, {Component} from 'react'; 
import {Table} from '../Components/Table'
import NumberField from '../Components/NumberField'


class Distribution extends Component{
 
  constructor () {
    super();
  }

  render(){
    
    return(
      <div> 
      <b>Distribución {this.props.name}: {this.props.descripcion}</b>
      <Table 
      _media={this.props.media} 
      _varianza={this.props.varianza} 
      _desviacion={this.props.desviacion}/>
      </div>
    )
  }

}

export default Distribution;