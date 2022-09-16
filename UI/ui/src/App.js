import { React, useState } from "react";
import Ads from "./components/Ads"
import "./App.css";

function App() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1 className="heading">React Search</h1>
      <div className="search">
        <input
          type='text'
          onChange={inputHandler}
          label="Search"
          placeholder="Search"
        />
      </div>
      <Ads input={inputText}/>
    </div>
  );
}

export default App;