import React, { useState } from "react";
import {Subheading} from './accordions.styles'
const MyAccordions = ({ Q, A }) => {
  const [showData, setShowData] = useState(false);
  return (
    <>
    <Subheading>
      <div className="question">
        <h2 className="plus" onClick={() => setShowData(!showData)}>{showData ? "-" : "+"}</h2>
        <h3>{Q}</h3>
      </div>
      {showData && <p className="answer">{A}</p>}
      </Subheading>
    </>
  );
};

export default MyAccordions;
