import React from "react";
import Greeting from "./components/practice/Greeting";
import MiniCalculator from "./components/practice/MiniCalculator";
import Netflix from "./components/card/Netflix";
import { Wrapper } from "./styles/main.styles";
import { NetflixContainer } from "./components/card/netflix.styles";
import Counter from "./components/counter/Counter";
import GetTime from "./components/practice/GetTime";
import InputField from "./components/form/InputField";
import TodoList from "./components/todoList/TodoList";
import Accordions from "./components/accordions/Accordions";
import RandomQuotes from "./components/randomquotes/RandomQuotes";


function App() {
  const customColors = {
    bg1: "green",
    bg2: "red",
    bg3: "gold",
  };
  return (
    <>
    
      <Wrapper>
        <RandomQuotes />
     {/* <Accordions /> */}
      </Wrapper>
      {/* <TodoList /> */}
      {/* <InputField /> */}
      {/* <Counter colors={customColors} /> */}
      {/* <GetTime /> */}
      {/* <Greeting /> */}
      {/* <NetflixContainer>
        <Netflix />
      </NetflixContainer> */}
      {/* <MiniCalculator /> */}
    </>
  );
}

export default App;
