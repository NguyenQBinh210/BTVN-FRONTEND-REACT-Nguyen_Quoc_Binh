import { useEffect } from "react";

const Child = () => {
  const handleClick = () => {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "pink",
      "purple",
      "orange",
      "cyan",
      "magenta",
      "brown",
      "black",
      "white",
    ];
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    const gradient = `linear-gradient(135deg, ${color1}, ${color2})`;
    document.body.style.background = gradient;
  };

  useEffect(() => {
    return () => {
      alert("Component unmounted");
      console.log("Component unmounted");
    };
  }, []);

  return (
    <>
      <h1>Change background color</h1>
      <button onClick={handleClick}>Change color</button>
    </>
  );
};

export default Child;
