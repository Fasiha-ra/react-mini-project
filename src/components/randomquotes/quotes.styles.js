import styled from "styled-components";
export const Quotes = styled.div`
  /* background-color: rgba(255, 0, 0, 0.9); */
  background-color: skyblue;
  width: 100%;
  height: 100vh;
  color: white;
  .wrapper {
    width: 400px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  .QuotesWrap {
    width: 100%;
    background-color: skyblue;
    /* background-color: rgb(255, 0, 0); */
    padding: 50px 40px;
    box-shadow: 0 20px 65px rgba(87, 11, 16, 0.5);
    position: relative;
    border-radius: 8px;
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      width: 80%;
      height: 120%;
      background-color: #ffffff;
      z-index: -1;
      top: -10%;
      left: 10%;
    }
    .quotes-text {
      font-size: 20px;
      padding: 10px 0;
    }
    .author-name{
        font-size: 24px;
        padding: 10px 0;
    }
    .line{
        height: 1px;
        width: 100%;
        background-color: white;
       
    }
     button{
        margin-top: 20px;
        padding: 10px;
        background-color: #ffffff;
        width: 120px;
        border: none;
        outline: none;
        color: skyblue;
        font-size: 18px;
        transition: all ease-in .3s;
        &:hover{
         box-shadow:0 20px 65px -5px rgba(87, 11, 16, 0.5) ;
        }
    }
  }
`;
