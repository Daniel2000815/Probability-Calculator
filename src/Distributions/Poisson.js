import Distribution from './Distribution';
import React, {Component} from 'react'; 
import NumberField from '../Components/NumberField';
import BarGraph from '../Components/BarGraph';
import NumberSlider from '../Components/NumberSlider';

import {choose, factorial} from '../Libraries/MyMath';

const gr= {
  labels: [],
  datasets: [
    {
      backgroundColor: 'rgba(75,192,192, 0.6)',
      highlightStroke: "rgba(220,220,220,1)",
      borderWidth: 0,
      data: []
    }
  ]
}
class Poisson extends Component {
    constructor (props) {
      super(props);
      this.changeL = this.changeL.bind(this);
      this.changePuntos = this.changePuntos.bind(this);

      this.state={
        name: "Poisson",
        descripcion: "Número de veces que ocurre un suceso RARO por unidades de tiempo.",
        l: 0,
        media: 0,
        varianza: 0,
        desviacion: 0,
        nPoints: 1
      }
    }

    componentDidUpdate(_prevProps, prevState) {
      if (prevState.l !== this.state.l || prevState.nPoints !== this.state.nPoints) {
        this.setState({
          media: this.calcularMedia(),
          varianza: this.calcularVarianza(),
          desviacion: this.calcularDesviacion(),
        });
        gr.labels = Array.from(Array(this.state.nPoints).keys())
        let _data = this.calcularFuncion();

        gr.datasets = [
          {
            backgroundColor: 'rgba(75,192,192, 0.6)',
            highlightStroke: "rgba(220,220,220,1)",
            borderWidth: 0,
            data: _data
          }
        ]
      }
    }

    calcularMedia() {
      return this.state.l;
    }
  
    calcularVarianza() {
      return this.state.l;
    }

    calcularDesviacion(){
      return this.state.l**(0.5);
    }

    
    calcularFuncion(){
      let _data = [];

      for (var i = 0; i <= this.state.nPoints; i++) {
        let prob = this.calcularProbabilidad(i);
        _data.push(Number(prob));
      } 

      return _data;
    }

    calcularProbabilidad(x){
      let result = Math.exp(-this.state.l) * (this.state.l ** x) / factorial(x);
      return result;
    }

    render(){
      return(
        <div>
          <NumberField label={"λ"} min={0} max={999999} step={"0.1"} defaultValue={0} helpText={"Proporción"} handleChange={this.changeL}/>
          
          
          <Distribution name={this.state.name} 
            descripcion={this.state.descripcion}
            media={this.state.media} 
            varianza={this.state.varianza}
            desviacion={this.state.desviacion}
          />
          <>
          <span> <BarGraph data={gr}/> </span>
          <NumberSlider min={0} max={70} default={1} step={1} handleChange={this.changePuntos}/>
          </>
        
        </div>
      )
    }

    changeL = async function(event) {
      await this.setState({ l: Number(event.target.value) });
    };

    changePuntos = async function(event, value) {
      await this.setState({ nPoints: Number(value) });
    };

}

export default Poisson;