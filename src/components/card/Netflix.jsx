import React from "react";
import Card from "./Card";
import CardData from "./CardData";
// const cData=(val)=>{
//     return(
//       <Card
//         imgSrc={val.imgSrc}
//         category={val.category}
//         title={val.title}
//         link={val.link}
//       />
//     );
// }
const Netflix = () => {
  return (
    <>
      {CardData.map((val) => {
        return (
          <Card
            key={val.id}
            imgSrc={val.imgSrc}
            category={val.category}
            title={val.title}
            link={val.link}
          />
        );
      })}
    </>
  );
};

export default Netflix;
