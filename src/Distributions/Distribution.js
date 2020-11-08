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
      <this.props.name/>
      <Table _media={this.props.media} _varianza={this.props.varianza}/>
      </div>
    )
  }

}

export default Distribution;