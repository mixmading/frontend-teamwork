import React, { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [inputData, setInputData] = useState([]);

  const handleInput = (event) => {
    const value = parseInt(event.target.value);
    setInputData([...inputData, value]);
  };

  return (
    <div>
      <input type="number" onChange={handleInput} />
      <Counter data={inputData} />
    </div>
  );
};

export default App;