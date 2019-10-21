import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #000 #333333;
  } 
  body {
    margin:0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight:normal;
    line-height:1.5;
    color:#333;
    overflow-x:hidden;
  }

  h1{
    font-size:1.8rem;
  }

  h2{
    font-size:1.5rem;
  }

  h3{
    font-size:1.2rem;
  }

  p{
    font-size: 1rem;
  }
  @media (max-width:700px){
    p{
      font-size: 0.8rem;
    }

    li{
      font-size: 0.8rem;
    }
  }

  ::-webkit-scrollbar{
    width:2px;
    height:9px;
    background-color: #ffffff33;
  }
  ::-webkit-scrollbar-button:start:decrement,body::-webkit-scrollbar-button:end:increment{
    display:block;
    height:0;
    background-color:transparent;
  }
  ::-webkit-scrollbar-track-piece{
    background-color:#FFFFFF;
    opacity:0.2;

    display:none;

    -webkit-border-radius:0;
    -webkit-border-bottom-right-radius:14px;
    -webkit-border-bottom-left-radius:14px;
  }

  ::-webkit-scrollbar-thumb:vertical{
    height:50px;
    background-color:#333333;
    -webkit-border-radius:8px;
  }
`;

export default Base;