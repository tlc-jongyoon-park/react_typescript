import * as React from "react";
import "./styles.css";
import { Provider } from "jotai";
import useConfirm from "./confirmHook";

const Counter = () => {
  console.log("!!!!");
  const { getConfirm, confirmAction } = useConfirm();
  console.log("!!!! getConfirm ", getConfirm);
  const onClick = async () => {
    await confirmAction.open();
  };

  return (
    <div>
      <button onClick={onClick}>modal</button>
    </div>
  );
};

export default function App() {
  return (
    <Provider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Counter />
      </div>
    </Provider>
  );
}
