import React, { useState, useEffect } from "react";

const Counter = ({ data }) => {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const sum = data.reduce((acc, val) => acc + val, 0);
    const newAverage = sum / data.length;
    setAverage(newAverage);
  }, [data]);

  return (
    <div>
      <p>Average: {average}</p>
    </div>
  );
};

export default Counter;
