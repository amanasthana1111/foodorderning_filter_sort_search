import React from "react";
import ReactDom from 'react-dom/client';
import Header from "./Header.js";
import Body from "./Body.js";

const App = ()=>{
    return(
        <>
        <Header></Header>
        <Body></Body>
        
        </>
    )
}



const root = ReactDom.createRoot(document.querySelector(".root"));
root.render(<App></App>)