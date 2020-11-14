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
class Geometrica extends Component {
    constructor (props) {
      super(props);
      this.changeP = this.changeP.bind(this);
      this.changePuntos = this.changePuntos.bind(this);

      this.state={
        name: "Geométrica",
        descripcion: "Nº de fracasos ANTES del primer éxito.",
        p: 0,
        media: 0,
        varianza: 0,
        desviacion: 0,
        nPoints: 1
      }
    }

    componentDidUpdate(_prevProps, prevState) {
      if (prevState.p !== this.state.p || prevState.nPoints !== this.state.nPoints) {
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
      let result = (1-this.state.p) / this.state.p ;  
      return result;
    }
  
    calcularVarianza() {
      let result = (1-this.state.p) / (this.state.p**2) ;  
      return result;
    }

    calcularDesviacion(){
      let result = ((1-this.state.p) / (this.state.p**2))**(0.5) ;  
      return result;
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
      let result = (1-this.state.p)**x * this.state.p 
      return result;
    }

    render(){
      return(
        <div>
          <NumberField label={"p"} min={0} max={1} step={"0.1"} defaultValue={0} helpText={"Probabilidad éxito"} handleChange={this.changeP}/>
          <Distribution name={this.state.name} 
            descripcion={this.state.descripcion}
            media={this.state.media} 
            varianza={this.state.varianza}
            desviacion={this.state.desviacion}
          />
          <span> <BarGraph data={gr}/></span>
          <NumberSlider min={0} max={40} default={1} step={1} handleChange={this.changePuntos}/>
          
        </div>
      )
    }

    changeP = async function(event) {
      await this.setState({ p: Number(event.target.value) });
    };

    changePuntos = async function(event, value) {
      await this.setState({ nPoints: Number(value) });
    };

}

export default Geometrica;