import React, { useState } from "react";
import "./Greeting.css";

const Greeting = () => {
  let currentDate = new Date();
  currentDate = currentDate.getHours();
  let greeting = "";
  let cssStyle = {};
  if (currentDate >= 1 && currentDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (currentDate >= 12 && currentDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "pink";
  } else {
    greeting = "Good Night";
    cssStyle.color = "blue";
  }

  let cTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(cTime);
  const updateTime = ()=>{
    cTime = new Date().toLocaleTimeString();
    setTime(cTime);
  }
  setInterval(updateTime, 1000);
  return (
    <>
      <div className="greeting">
        <h2>{time}</h2>
        <h1>
          Hello Everyone, <span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
};

export default Greeting;
