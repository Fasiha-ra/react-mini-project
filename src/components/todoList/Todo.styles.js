import styled from "styled-components";
import '../../styles/variables.css';

let shadow= "5px 5px 25px -5px rgba(0, 0, 0, 0.5)";
let cursor= "pointer";
export const Todo = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: gray;
  .todo {
    width: 25%;
    min-height: 80vh;
    background-color: #f4f4f4;
    box-shadow:${shadow};
    border-radius: 15px;
  }
  .heading {
    color: var(--white);
    padding: 6px 0 2px 0;
    background-color:var(--primary);
    margin:10px 0 30px 0;
    box-shadow: ${shadow};
  }
  input {
    text-align: center;
    border: none;
    outline: none;
    height: 30px;
    top: 20px;
    font-size: 20px;
    font-weight: 600;
    width: 60%;
    border-bottom: 2px solid var(--primary);
    background: transparent;
  }
  button {
    min-height: 40px;
    width: 40px;
    color: var(--white);
    border-radius: 50%;
    background-color: var(--primary);
    outline: none;
    border: none;
    font-size: 24px;
    cursor: ${cursor};
    margin-left: 10px;
    box-shadow: ${shadow};
    transition: all ease-in-out 0.3s;
    &:hover {
      background-color: green;
    }
  }
  ul {
    margin-top: 30px;
    li {
      color: grey;
      text-align: left;
      min-height: 40px;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      padding-left: 0;
      font-size:20px;
    }
  }
`;
export const ItemStyle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  .fa-xmark {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 25px 0 35px;
    background-color: var(--primary);
    border-radius: 50%;
    padding: 15px;
    color: white;
    box-shadow: ${shadow};
    cursor: ${cursor};
    transition: all ease-in 0.3s;
    &:hover {
      background-color: crimson;
    }
  }
`;
