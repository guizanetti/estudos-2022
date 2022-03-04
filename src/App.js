import React, { useState } from "react";
import Home from "./Home";

const App = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));

  return (
    <div>
      <>
        <Home array={data} setArray={setData} />
      </>
    </div>
  );
};

export default App;
