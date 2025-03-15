import { Component } from "react";
import Child from "./Child";
interface State {
  time: string;
  show: boolean;
}
class StaticTime extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      show: false,
    };
  }
  handleTimer = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
    console.log("Time updated at:", this.state.time);
  };
  handleToggle = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };
  componentDidMount() {
    console.log("Component mounted");
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>) {
    console.log("State updated");
    console.log("Previous props:", prevProps);
    console.log("Previous state:", prevState.time);
    console.log("Current state:", this.state.time);
  }
  componentWillUnmount() {
    console.log("Component unmounted");
  }
  render() {
    return (
      <div className="box">
        <h2>Đồng hồ</h2>
        <p>Thời gian hiện tại: {this.state.time}</p>
        <button onClick={this.handleTimer}>Get time</button>
        <button onClick={this.handleToggle}>Hiden</button>
        {this.state.show === true ? <Child /> : null}
      </div>
    );
  }
}
export default StaticTime;
