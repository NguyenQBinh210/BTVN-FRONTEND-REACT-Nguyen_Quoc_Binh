import { Component, ReactNode } from "react";

class Child extends Component {
  handleClick = () => {
    const color = ["red", "blue", "green", "yellow", "pink", "purple",
         "orange", "cyan", "magenta", "brown", "black", "white"];
    const color1 = color[Math.floor(Math.random() * color.length)];
    const color2 = color[Math.floor(Math.random() * color.length)];
    const gradient = `linear-gradient(135deg, ${color1}, ${color2})`;
    document.body.style.background = gradient;
  };
  componentWillUnmount() {
    alert("Component unmounted");
    console.log("Component unmounted");
  }
  render(): ReactNode {
    return (
      <>
        <h1>Change background color</h1>
        <button onClick={this.handleClick}>Change color</button>
      </>
    );
  }
}
export default Child;
