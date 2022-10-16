import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color}) {
  // console.log(onChangeColor)
  return <div 
  className="child" 
  onClick={onChangeColor} 
  style={{ backgroundColor: color}}/>;
}

export default Child;
