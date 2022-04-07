import React, { useState } from "react";
import "./App.css";

function App() {
  const [myText, setText] = useState("Change BG");

  const ChangeBG = () => {
    //RGB colors

    // const num1 = Math.floor(Math.random() * 256);
    // const num2 = Math.floor(Math.random() * 256);
    // const num3 = Math.floor(Math.random() * 256);
    // document.body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
    // setText(`rgb = ${num1}, ${num2}, ${num3}`);

    //HEX colors

    const arrHex = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 14);
      hex += arrHex[index];
    }

    document.body.style.backgroundColor = hex;
    console.log(hex);
    setText(hex);
  };

  return (
    <div className="App">
      <div className="outer">
        <button onClick={ChangeBG} className="btn">
          {myText}
        </button>
      </div>
    </div>
  );
}

export default App;
