import './App.css';
import { Component, useState } from "react";

class clock extends Component{
constructor(props){
    super(props)
    this.state = {
        rand: Math.floor(Math.random() * 5000),
        num: 0
    };
}

numberChange5 = () =>{
    this.setState({
        rand: Math.floor(Math.random() * 5000)
    });
}

numberChangeLong = () => {
    this.setState({
        rand: Math.floor(Math.random() * 1000000)
    });
}
cryptoGen = () => {
    this.setState({
        rand: Math.random().toString(36).substring(2)
    });
}
countApp = () => {
    this.setState({
        num: this.state.num + 1
    });
}

render(){
    return(

    <div className='App'>
    <header className='App-header'>
<h1 className='AppH1'>{this.state.rand}</h1>
<button className = 'blah' onClick={this.numberChange5}>Randomises number from 5000</button>
<button className = 'blah' onClick={this.numberChangeLong}>Randomises number from a mil</button>
<button className = 'blah' onClick={this.cryptoGen}>Randomises Crypto</button>
<button className = 'blah' onClick={this.countApp}>Clicked: {this.state.num}</button>

</header>
</div>
);

}
}

export default clock;

