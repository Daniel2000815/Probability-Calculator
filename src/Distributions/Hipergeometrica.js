import Distribution from './Distribution';
import React, {Component} from 'react'; 
import NumberField from '../Components/NumberField';
import BarGraph from '../Components/BarGraph';
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
class Hipergeometrica extends Component {
    constructor (props) {
      super(props);
      this.changeN = this.changeN.bind(this);
      this.changen = this.changen.bind(this);
      this.changek = this.changek.bind(this);

      this.state={
        name: "Hipergeométrica",
        descripcion: "Nº de éxitos tras n extracciones sin reemplazamiento de una población de tamaño N, con k individuos de una clase (éxito) y N-k de otra (fracaso).",
        N: 0,
        n: 0,
        k: 0,
        media: 0,
        varianza: 0,
        desviacion: 0,
      }
    }

    componentDidUpdate(_prevProps, prevState) {
      if (prevState.N !== this.state.N || prevState.n !== this.state.n || prevState.k !== this.state.k) {
        this.setState({
          media: this.calcularMedia(),
          varianza: this.calcularVarianza(),
          desviacion: this.calcularDesviacion(),
        });
        gr.labels = Array.from(Array(this.state.n+1).keys())
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
      let result = this.state.k * this.state.n / this.state.N;
      return result;
    }
  
    calcularVarianza() {
      let result = (this.state.k * this.state.n / this.state.N) * (1-this.state.k/this.state.N)*((this.state.N-this.state.n)/(this.state.N-1));
      return result;
    }

    calcularDesviacion(){
      let result = ((this.state.k * this.state.n / this.state.N) * (1-this.state.k/this.state.N)*((this.state.N-this.state.n)/(this.state.N-1)))**(0.5);
      return result;
    }

    
    calcularFuncion(){
      let _data = [];

      for (var i = 0; i <= this.state.n; i++) {
        let prob = this.calcularProbabilidad(i);
        _data.push(Number(prob));
      } 

      return _data;
    }

    calcularProbabilidad(x){
      let n1 = choose(this.state.k, x);
      let n2 = choose(this.state.N-this.state.k, this.state.n-x);
      let n3 = choose(this.state.N, this.state.n);

      let result = n1*n2/n3;
      return result;
    }

    render(){
      return(
        <div>
          <NumberField label={"N"} min={0} max={100000} step={"1"} defaultValue={0} helpText={"Población original"} handleChange={this.changeN}/>
          <NumberField label={"n"} min={0} max={100000} step={"1"} defaultValue={0} helpText={"Extracción"} handleChange={this.changen}/>
          <NumberField label={"k"} min={0} max={100000} step={"1"} defaultValue={0} helpText={"Población marcada"} handleChange={this.changek}/>          
          <Distribution name={this.state.name} 
            descripcion= {this.state.descripcion}
            media={this.state.media} 
            varianza={this.state.varianza}
            desviacion={this.state.desviacion}
          />
          <span> <BarGraph data={gr}/></span>          
        </div>
      )
    }

    changeN = async function(event) {
      await this.setState({ N: Number(event.target.value) });
    };

    changen = async function(event) {
      await this.setState({ n: Number(event.target.value) });
    };

    changek = async function(event) {
      await this.setState({ k: Number(event.target.value) });
    };


}

export default Hipergeometrica;