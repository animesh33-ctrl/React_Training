import { Component } from "react";

class ClassComp extends Component {
  constructor() {
    super();
    this.state = { value: 1 };
  }

  changeMszInc = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  changeMszDec = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };
  render() {
    return (
      <>
        <h3 className="text-green-400">
          My first class component : {this.props.name}
        </h3>
        <p>this is value : {this.state.value}</p>
        <button onClick={this.changeMszInc}>Increment</button>
        <button onClick={this.changeMszDec}>Decrement</button>
      </>
    );
  }
}

export default ClassComp;
