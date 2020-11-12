import Distribution from './Distribution';
import React, {Component} from 'react'; 
import NumberField from '../Components/NumberField';
import BarGraph from '../Components/BarGraph';
import {choose, factorial} from '../Libraries/Math';

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
class Binomial extends Component {
    constructor (props) {
      super(props);
      this.changeN = this.changeN.bind(this);
      this.changeP = this.changeP.bind(this);

      this.state={
        name: "Binomial",
        p: 0,
        n: 0,
        media: 0,
        varianza: 0,
        desviacion: 0,
      }
    }

    componentDidUpdate(_prevProps, prevState) {
      if (prevState.p !== this.state.p || prevState.n !== this.state.n) {
        this.setState({
          media: this.calcularMedia(),
          varianza: this.calcularVarianza(),
          desviacion: this.calcularDesviacion(),
        });
        gr.labels = Array.from(Array(this.state.n + 1).keys())
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
      let result = this.state.n * this.state.p;  
      return result;
    }
  
    calcularVarianza() {
      let result = this.state.n * this.state.p * (1-this.state.p);  
      return result;
    }

    calcularDesviacion(){
      let result = (this.state.n * this.state.p * (1-this.state.p)) ** (1/2);

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
      let result = choose(this.state.n, x) * this.state.p**x * (1-this.state.p)**(this.state.n-x);
      return result;
    }

    render(){
      return(
        <div>
          <NumberField label={"n"} min={0} max={9999999} helpText={"Población"} step={"1"} handleChange={this.changeN}/>
          <NumberField label={"p"} min={0} max={1} step={"0.1"} helpText={"Probabilidad"} handleChange={this.changeP}/>
          <Distribution name={this.state.name} 
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

    changeN = async function(event) {
      await this.setState({ n: Number(event.target.value) });
    };
}

export default Binomial;