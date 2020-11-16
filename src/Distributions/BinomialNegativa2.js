import Distribution from './Distribution';
import React, {Component} from 'react'; 
import NumberField from '../Components/NumberField';
import BarGraph from '../Components/BarGraph';
import {choose, factorial} from '../Libraries/MyMath';
import CalcProb from '../Components/CalcProb';
import NumberSlider from '../Components/NumberSlider';


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

class BinomialNegativa2 extends Component {
    constructor (props) {
      super(props);
      this.changeR = this.changeR.bind(this);
      this.changeP = this.changeP.bind(this);
      this.changeRange = this.changeRange.bind(this);
      this.changePuntos = this.changePuntos.bind(this);


      this.state={
        name: "Binomial Negativa (v2)",
        descripcion: "Número de fracasos HASTA el k-ésimo éxito.",
        p: 0,
        r: 1,
        media: 0,
        nPoints: 1,
        varianza: 0,
        desviacion: 0,
        probRange: [0,0],
        probabilidad: 0
      }
    }

    componentDidUpdate(_prevProps, prevState) {
      if (prevState.p !== this.state.p || prevState.nPoints !== this.state.nPoints ||  prevState.r !== this.state.r || prevState.probRange !== this.state.probRange) {
        this.setState({
          media: this.calcularMedia(),
          varianza: this.calcularVarianza(),
          desviacion: this.calcularDesviacion(),
        });

        gr.labels = Array(this.state.nPoints - this.state.r + 1).fill().map((_, idx) =>  this.state.r + idx)
        let _data = this.calcularFuncion();
      

        gr.datasets = [
          {
            backgroundColor: 'rgba(75,192,192, 0.6)',
            highlightStroke: "rgba(220,220,220,1)",
            borderWidth: 0,
            data: _data
          }
        ]

        let res = 0;
        console.log("CALCULANDO ENTRE " + this.state.probRange[0] + " Y " + this.state.probRange[1]);
        for(let i=this.state.probRange[0]; i<=this.state.probRange[1]; i++){
          console.log(this.calcularProbabilidad(i))
          res += this.calcularProbabilidad(i);
        }
        console.log("RES= " + res );
        this.setState({
          probabilidad: res
        })
      }
    }

    calcularMedia() {
      let result = this.state.r / this.state.p;
      return result;
    }
  
    calcularVarianza() {
      let result = this.state.r / this.state.p**2;
      return result;
    }

    calcularDesviacion(){
      let result = (this.state.r / this.state.p**2)**(0.5);
      return result;
    }

    
    calcularFuncion(){
      let _data = [];

      for (var i = this.state.r ; i <= this.state.nPoints; i++) {
        let prob = this.calcularProbabilidad(i);
        _data.push(Number(prob));
      } 

      return _data;
    }

    calcularProbabilidad(x){
      let result = choose(x -1, x-this.state.r) * this.state.p**(this.state.r) * (1-this.state.p)**(x-+this.state.r);
      return result; 
    }

    render(){
      return(
        <div>
          <NumberField label={"p"} min={0} max={1} step={"0.1"} defaultValue={0} helpText={"Probabilidad éxito"} handleChange={this.changeP}/>
          <NumberField label={"k"} min={1} max={999999} step={"1"} defaultValue={1} helpText={"Nº éxito"} handleChange={this.changeR}/>
          <Distribution name={this.state.name} 
            descripcion={this.state.descripcion}
            media={this.state.media} 
            varianza={this.state.varianza}
            desviacion={this.state.desviacion}
          />
          <BarGraph data={gr}/>
          <NumberSlider min={0} max={100} default={1} step={1} handleChange={this.changePuntos}/>
          <CalcProb result={this.state.probabilidad} min={this.state.r} max={this.state.nPoints} range={this.state.probRange} handleChange={this.changeRange}/>

          
        </div>
      )
    }

    changeRange = async function(event, value) {
      await this.setState({ probRange: value });
    };

    changeP = async function(event) {
      await this.setState({ p: Number(event.target.value) });
    };

    changeR = async function(event) {
      await this.setState({ r: Number(event.target.value) });
    };

    changePuntos = async function(event, value) {
      await this.setState({ nPoints: Number(value) });
    };
}

export default BinomialNegativa2;