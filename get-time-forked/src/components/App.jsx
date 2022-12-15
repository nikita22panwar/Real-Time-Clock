import React, { useState } from "react";

function App() {
  setInterval(Current, 1000);

  const [Time, setTime] = useState();

  function Current() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={Current}>Get Time</button>
    </div>
  );
}

export default App;
