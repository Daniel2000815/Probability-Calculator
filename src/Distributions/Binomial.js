import Distribution from './Distribution';
import React, {Component} from 'react'; 
import NumberField from '../Components/NumberField';
import BarGraph from '../Components/BarGraph'

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
        labels: [],
        data: []
      }
    }

    componentDidUpdate(_prevProps, prevState) {
      if (prevState.p !== this.state.p || prevState.n !== this.state.n) {
        
        this.setState({
          media: this.calcularMedia(),
          varianza: this.calcularVarianza(),
          desviacion: this.calcularDesviacion(),
          data: [1,2],
          labels: ['a', 'b']
        });
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

      for (var i = 0; i < this.state.n; i++) {
        let prob = this.calcularProbabilidad(i);
        _data.push(Number(prob));
      } 

      return _data;
    }

    calcularProbabilidad(x){
      let result = this.choose(this.state.n, x) * this.state.p**x * (1-this.state.p)**(this.state.n-x);
      return result;
    }

    factorial = (n) => {
      return n >= 1 ? n * this.factorial(n - 1) : 1
    }

    choose(a,b){
      let result = (this.factorial(a))/(this.factorial(b) * this.factorial(a-b));
      return result;
    }

    render(){
      return(
        <div>
          <NumberField label={"n"} min={0} max={9999999} handleChange={this.changeN}/>
          <NumberField label={"p"} min={0} max={1} handleChange={this.changeP}/>
          <Distribution name={this.state.name} 
            media={this.state.media} 
            varianza={this.state.varianza}
            desviacion={this.state.desviacion}
          />
          <BarGraph _labels={['A', 'B']} _data= {[1,2]}/>
          
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