import "./styles.css";
import { memo, useState, useContext, useEffect } from "react";
import Test from "./Test";
import Context from "./Context";

let globalVal = 0;
let MyObject = { a: 2 };
export default function App() {
  let localVal = 0;
  const [a, setA] = useState(0);
  const ChangeState = () => {
    setA(a + 1);
    console.log("--------------------------");
    console.log("ChangeStateValue result: ", a);
    console.log("--------------------------");
  };
  const changeGlobalVal = () => {
    console.log("--------------------------");
    globalVal = globalVal + 1;
    console.log("GlobalValue: ", globalVal);
    console.log("--------------------------");
  };
  const changeGlobalValWithCopy = () => {
    console.log("--------------------------");
    let newGlobalVal = globalVal + 1; // is it metters?
    console.log(
      "GlobalValue: ",
      globalVal,
      "NewGlobalValue: ",
      newGlobalVal,
      "newGlobal === global",
      globalVal === newGlobalVal
    );
    globalVal = newGlobalVal;
    console.log("GlobalValue: ", globalVal);
    console.log("--------------------------");
  };
  const changeContextObject = () => {
    console.log("--------------------------");
    console.log(MyObject);
    let newObject = { a: 4 };
    console.log(MyObject, newObject, "same? ===", MyObject === newObject);
    MyObject = newObject;
    console.log("--------------------------");
  };
  console.log("App is rendered");
  localVal = localVal + 1;
  return (
    <>
      <button onClick={ChangeState}>ChangeState</button>
      <button onClick={changeGlobalVal}>changeGlobalVal</button>
      <button onClick={changeGlobalValWithCopy}>changeGlobalValWithCopy</button>
      <button onClick={changeContextObject}>change</button>
      <Context.Provider value={globalVal}>
        <Example />
      </Context.Provider>
      <hr />
      <Context.Provider value={localVal}>
        <Test />
      </Context.Provider>
      <Context.Provider value={MyObject}>
        <Test />
        Obj
      </Context.Provider>
      {localVal}
    </>
  );
}

function Example() {
  console.log("Example rendered");
  const data = useContext(Context);

  return <span>{data}</span>;
}
