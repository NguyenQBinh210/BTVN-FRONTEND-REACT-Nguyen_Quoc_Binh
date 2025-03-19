import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    return () => {
      alert("Bye bye");
    };
  }, []);
  return (
    <>
      <h1>Child component</h1>
    </>
  );
};

export default Test;
