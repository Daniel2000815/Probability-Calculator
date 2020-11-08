import Distribution from './Distribution';
import React, {Component} from 'react'; 
import NumberField from '../Components/NumberField';

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
        varianza: 0
      }
    }

    calcularTodo(){
      this.calcularMedia();
      this.calcularVarianza();
    }

    calcularMedia(){
      if(this.state.p === 0|| this.state.n === 0)
        this.setState({media: 0})

      else{
        let result = Number(this.state.n) * Number(this.state.n); 
        console.log("CALCULANDO " + this.state.n + " * " + this.state.p + " = " + result)

        this.setState({media: result})
      }
    }

    calcularVarianza(){
      this.setState({varianza: 2})
    }

    render(){
      return(
        <div>
          <NumberField label={"p"} handleChange={this.changeP}/>
          <NumberField label={"n"} handleChange={this.changeN}/>
          <Distribution name={this.state.name} media={this.state.media} varianza={this.state.varianza}/>
        </div>
      )
    }

    changeP = async function (event){
      await this.setState({p: Number(event.target.value)});
      this.calcularTodo();
    }

    changeN = async function (event){
      await this.setState({n: Number(event.target.value)});
      this.calcularTodo();
    }
}

export default Binomial;