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

// console.log(Object.keys(emojiDictionary));
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  


  const [userInput, setUserInput] = useState("");
  function emojiInputHandler(event) {

    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    console.log(meaning);
    if (meaning === undefined && userInput !== "") {
      meaning = "we don't have this in our database";
    }
    setUserInput(meaning);
  }
  
  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setUserInput(meaning);
  }


  return (
    <div className="App">
      <h1>
        inside <span style={{ color: color }}>outtt...</span>
      </h1>
      <input onChange={emojiInputHandler}></input>
      
      <div>
        <span style={{ fontWeight: "bold" }}>{userInput}</span>
      </div>

      <h3>Emojis We Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
