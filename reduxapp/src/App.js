import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
    <div className = "container"></div>
    <h2>Increment / Decrement</h2>
      <h1>React Redux App</h1>

      <div className= "quantity">
        <a className = "quantity__minus" title = "Decrement" 
        onClick = { () => dispatch(decNumber())}><span>-</span></a>
        <input name = "quantity" type = "text" className = "quantity__input" value = "myState" />
        <a className = "quantity__plus" title = "Increment"
        onClick = {()=>incNumber()
         }><span>+</span></a>
      </div>
    </>
  )
}

export default App
