import React from "react";
import { useState } from "react";

import "./App.css";

var color = "#1D4ED8";

const emojiDictionary = {
  "😊": "Smiling",
  "😲": "Disbelief",
  "😞": "Sad",
  "🥱": "Yawning",
  "🤑": "Money-Face",
  "😴": "Sleeping"
};

export default function App() {
  // const [userInput, setUserInput] = useState("");

  // function inputChangeHandler(event) {
  // console.log(event.target);
  // console.log(event.target.value);
  //   setUserInput(event.target.value);
  // }
  const [userInput, setUserInput] = useState("");
  function emojiInputHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    console.log(meaning);
    if (meaning === undefined && userInput !== "") {
      meaning = "we don't have this in our database";
    }
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1>
        inside <span style={{ color: color }}>outtt...</span>
      </h1>
      <input onChange={emojiInputHandler}></input>
      {/* <input onChange={inputChangeHandler}></input>

      <div>Welcome {userInput}</div> */}
      <div>
        <span style={{ fontWeight: "bold" }}>{userInput}</span>
      </div>
    </div>
  );
}
