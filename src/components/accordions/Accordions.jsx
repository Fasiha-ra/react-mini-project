import React, { useState } from "react";
import { questions } from "./data";
import MyAccordions from "./MyAccordions";
import { Accordion } from "./accordions.styles";

const Accordions = () => {
  const [data] = useState(questions);
  return (
    <> 
      <Accordion>
        <h1>React interview questions</h1>
        <div className="main-data">
          {data.map((elem) => {
            return <MyAccordions key={elem.id} {...elem} />;
          })}
        </div>
      </Accordion>
    </>
  );
};

export default Accordions;
