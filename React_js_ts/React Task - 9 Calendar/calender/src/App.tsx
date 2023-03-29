import React, { useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState(new Date());
 
  return (
    <>
      <Calendar date={value} />
     
    </>
  );
}

export default App;
