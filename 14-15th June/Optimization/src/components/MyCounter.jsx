import { PureComponent } from "react";

export default class MyCounter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }
  render() {
    console.log("MyCounter render");
    return (
      <div>
        <h2>Count is : {this.state.count}</h2>
        <button onClick={() => this.setState({ count: 10 })}>+</button>
      </div>
    );
  }
}
