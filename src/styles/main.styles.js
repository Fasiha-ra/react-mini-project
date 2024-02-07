import styled from "styled-components";

export const Wrapper = styled.div`
  // max-width: 1200px;
  // margin: 0 auto;
  *,
  html {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font: 16px/20px "Roboto", sans-serif;
    color: #231f20;
    margin: 0;
    padding: 0;
    background: #fff;
  }

  .container {
    max-width: 1150px;
    padding: 0 15px;
    margin: 0 auto;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin: 0 0 10px;
    font-weight: 700;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="file"],
  input[type="submit"] {
    cursor: pointer;
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;
