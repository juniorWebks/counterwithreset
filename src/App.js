import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
    clearCounter: 0,
    isLoading:true
  };

  resetForm = () => {
    this.setState({
      counter: 0,
      counterNew: 0
    });
  };

  incHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };


  decHandler = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  
  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
fetch('https://counter-7299a.firebaseio.com/counter.json')
      .then(response => response.json())
      .then(data => console.log(data));

  }


render() {
    return (
      <div>
        <div>
          <h3>Zerowanie licznika:</h3>
          <button onClick={this.resetForm}>clear</button>
          <h1>{this.state.counter}</h1>
          <button onClick={this.incHandler}>+</button>
          <button onClick={this.decHandler}>-</button>
          <h3>Zwiększanie i zmniejszanie licznika o 1: </h3>
          <button onClick={this.sendDataToFirebase}> Submit data and send</button>
        </div>
      </div>


    );
  }
}

export default App;