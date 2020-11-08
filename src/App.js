import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {Table} from './Components/Table'
import Selector from './Components/Selector'
import NumberField from './Components/NumberField'
import Binomial from './Distributions/Binomial'
import BinomialNegativa1 from './Distributions/BinomialNegativa1'
import BinomialNegativa2 from './Distributions/BinomialNegativa2'
import Geomretrica from './Distributions/Geometrica'
import Hipergeometrica from './Distributions/Hipergeometrica'
import Pascal from './Distributions/Pascal'
import Poisson from './Distributions/Poisson'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
        distribution: null,
    }
  }

  changeDistribution = event =>{
    this.setState({distribution: event.target.value});
  }

  ShowDistribution = () => {
      if(this.state.distribution === "B"){
        return <Binomial />
      }
      else if(this.state.distribution === "BN1"){
        return <BinomialNegativa1 />
      }
      else if(this.state.distribution === "BN2"){
        return <BinomialNegativa2 />
      }
      else if(this.state.distribution === "G"){
        return <Geomretrica />
      }
      else if(this.state.distribution === "Pc"){
        return <Pascal />
      }
      else if(this.state.distribution === "H"){
        return <Hipergeometrica />
      }
      else if(this.state.distribution === "P"){
        return <Poisson />
      }
      else{
        return <p>Selecciona distribución...</p>
      }
  }

  render(){
    return (
      <div className = "PROB"> 
        <Selector handleChange={this.changeDistribution} options={this.options}/>
        <this.ShowDistribution/>
      </div>
    );
  }
}

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
ReactDOM.render(element, document.getElementById('root'));

export default App;
