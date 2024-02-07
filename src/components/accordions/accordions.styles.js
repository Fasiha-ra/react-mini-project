import styled from "styled-components";
export const Accordion = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to left,
    rgba(92, 129, 202, 1) 0%,
    rgba(249, 140, 112, 1) 100%
  );
  h1 {
    text-transform: capitalize;
    color: #ffddcc;
    font-size: 40px;
  }
  /* background-color: aliceblue; */
  .main-data {
    width: 450px;
    /* min-height: 500px; */
    /* background-color: gray; */
    /* border-radius: 10px 0px 10px 0px; */
    padding: 20px;
  }
`;
export const Subheading = styled.div`
  .question {
    /* background: lightgray; */
    color: #ffddcc;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    border-radius: 20px 0px 20px 0px;
    margin-bottom: 5px;
    transition: all ease-in 0.3s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.5);
    }
    .plus {
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      /* padding: 10px; */
      font-size: 22px;
      padding: 5px 10px 10px 10px;
      border-radius: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all ease-in 0.3s;
      &:hover {
        box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.5);
      }
    }
  }
  .answer {
    color: #ffddcc;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    transition: all 350ms cubic-bezier(0.08, 1.09, 0.32, 1.275);
  }
`;
