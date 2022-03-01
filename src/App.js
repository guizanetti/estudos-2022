import React, { useState } from "react";
import Home from "./Home";

const App = () => {
  const [data, setData] = useState({
    rules: {
      reproved: [0, 4],
      pending: [5, 7],
      approved: [8, 10],
    },
    listOfStudents: [
      {
        id: 1,
        name: "Joao Silva",
        age: new Date("10-12-1996"),
        score: [3, 6, 2, 9, 7],
        course: "Designer",
      },
      {
        id: 2,
        name: "Ana Souza Maria do Carmo Rodrigues",
        age: new Date("06-04-2001"),
        score: [7, 6, 5, 8, 8, 10, 10],
        course: "Arquitetura",
      },
      {
        id: 3,
        name: "Marcos Oliveira",
        age: new Date("03-19-1994"),
        score: [1, 3, 2, 1, 3],
        course: "Engenheiro",
      },
    ],
  });

  return (
    <div>
      <>
        <Home array={data} setArray={setData} />
      </>
    </div>
  );
};

export default App;
