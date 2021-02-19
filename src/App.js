/* 
<StyledExample color={'red'}>，在const StyledExample = styled` color:${props=>props.color};`
*/
import React from "react";
import HomePage from "./pages/HomePage";
import "./styles.css";

export default function App() {
  return <HomePage />;
}
