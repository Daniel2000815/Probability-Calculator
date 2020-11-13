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

class BinomialNegativa1 extends Component {
    constructor (props) {
      super(props);
      this.changeR = this.changeR.bind(this);
      this.changeP = this.changeP.bind(this);

      this.state={
        name: "Binomial Negativa (v1)",
        descripcion: "Número de fracasos ANTES del k-ésimo éxito.",
        p: 0,
        r: 0,
        media: 0,
        varianza: 0,
        desviacion: 0,
      }
    }

    componentDidUpdate(_prevProps, prevState) {
      if (prevState.p !== this.state.p || prevState.r !== this.state.r) {
        this.setState({
          media: this.calcularMedia(),
          varianza: this.calcularVarianza(),
          desviacion: this.calcularDesviacion(),
        });

        gr.labels = Array(this.state.r*3 - this.state.r - 1).fill().map((_, idx) => this.state.r-1 + idx)
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
      let result = this.state.r * (1-this.state.p) / this.state.p;
      return result;
    }
  
    calcularVarianza() {
      let result = this.state.r * (1-this.state.p) / this.state.p**2;
      return result;
    }

    calcularDesviacion(){
      let result = (this.state.r * (1-this.state.p) / this.state.p**2)**(0.5);
      return result;
    }

    
    calcularFuncion(){
      let _data = [];

      for (var i = this.state.r-1 ; i <= this.state.r*3; i++) {
        let prob = this.calcularProbabilidad(i);
        _data.push(Number(prob));
      } 

      return _data;
    }

    calcularProbabilidad(x){
      let result = choose(x+this.state.r -1, x) * this.state.p**(this.state.r) * (1-this.state.p)**x;
      return result; 
    }

    render(){
      return(
        <div>
          <NumberField label={"p"} min={0} max={1} step={"0.1"} defaultValue={0} helpText={"Probabilidad éxito"} handleChange={this.changeP}/>
          <NumberField label={"k"} min={1} max={999999} step={"1"} defaultValue={1} helpText={"Nº éxito"} handleChange={this.changeR}/>
          <Distribution 
            descripcion={this.state.descripcion}
            name={this.state.name} 
            media={this.state.media} 
            varianza={this.state.varianza}
            desviacion={this.state.desviacion}
          />
          <BarGraph data={gr}/>
          
        </div>
      )
    }

    changeP = async function(event) {
      await this.setState({ p: Number(event.target.value) });
    };

    changeR = async function(event) {
      await this.setState({ r: Number(event.target.value) });
    };
}

export default BinomialNegativa1;