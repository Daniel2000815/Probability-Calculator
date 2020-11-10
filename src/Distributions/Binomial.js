import Distribution from './Distribution';
import React, {Component} from 'react'; 
import NumberField from '../Components/NumberField';
import LineGraph from '../Components/LineGraph'

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
        nPoints: 50,
        labels: [],
        data: []
      }
    }

    componentDidUpdate(_prevProps, prevState) {
      if (prevState.p !== this.state.p || prevState.n !== this.state.n) {
        const fuctionData = this.calcularFuncion();
        this.setState({
          media: this.calcularMedia(),
          varianza: this.calcularVarianza(),
          desviacion: this.calcularDesviacion(),
          data: fuctionData[0],
          labels: fuctionData[1]
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
      let _labels = [];

      for (var i = 0; i < this.state.nPoints; i++) {
        _labels.push(i);

        let prob = this.calcularProbabilidad(i);
        _data.push(prob);
      } 

      return [_data, _labels];
    }
    


    calcularProbabilidad(x){
      let result = this.choose(this.state.n, x) * this.state.p**x * (1-this.state.p)**(this.state.n-x);
    }

    factorial(n) {
      if (n === 1) {
        return 1;
      }
      
      return n * this.factorial(n - 1);
    }

    choose(a,b){
      let result = (this.factorial(a))/(this.factorial(b) * this.factorial(a-b));
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
          <LineGraph _labels={this.state.labels} _data= {this.state.data}/>
          
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