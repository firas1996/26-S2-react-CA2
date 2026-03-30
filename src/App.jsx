import { useState } from "react";
import FirstComp from "./components/FirstComp";

const App = () => {
  const [test, setTest] = useState("");
  const name = "Firas";
  const getData = (data) => {
    console.log(data);
    setTest(data);
  };
  return (
    <>
      <h1>Hello, {test} </h1>
      <FirstComp name={name} getData={getData} />
    </>
  );
};

export default App;
