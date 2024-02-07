import React, { useState } from "react";

const GetTime = () => {
  let newTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(newTime);
  const currentTime = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime)
    
  };
 
  return (
    <>
      <h1>{time}</h1>
      <button onClick={currentTime}>get time</button>
    </>
  );
};

export default GetTime;
