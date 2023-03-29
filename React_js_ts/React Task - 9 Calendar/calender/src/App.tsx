import React from "react";
import Calendar from "./components/Calendar.component";

function App() {
  return (
    <>
      <Calendar date={new Date()} />
    </>
  );
}

export default App;
