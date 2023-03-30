import React from "react";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <>
      <Calendar date={new Date()} />
    </>
  );
}

export default App;
