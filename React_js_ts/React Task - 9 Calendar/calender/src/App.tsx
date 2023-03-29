import React, { useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  const [value, setValue] = useState(new Date());
 
  return (
    <>
      <Calendar date={value} />
     
    </>
  );
}

export default App;
