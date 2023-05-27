import React, { useState } from "react";

export default function UserParticipation(props) {
  const [value, setValue] = useState();
  const [optionItem, setOptionItem] = useState();
  let question = props.questionArray[0];

  let handleInput = (e) => {
    let value = e.target.value;
    if (question["choices"][0].id == value) {
      setValue(question["choices"][0]);
    } else if (question["choices"][1].id == value) {
      setValue(question["choices"][1]);
    } else if (question["choices"][2].id == value) {
      setValue(question["choices"][2]);
    } else if (question["choices"][3].id == value) {
      setValue(question["choices"][3]);
    }
  };
  return (
    <div>
      <h4>{question["question"]}</h4>
      <p>Select the choices:</p>
      <div id="group">
        <input
          type="radio"
          name="question"
          value={question["choices"][0].id}
          onClick={handleInput}
        />
        {question["choices"][0].label}
        <input
          type="radio"
          name="question"
          value={question["choices"][1].id}
          onClick={handleInput}
        />
        {question["choices"][1].label}
        <input
          type="radio"
          name="question"
          value={question["choices"][2].id}
          onClick={handleInput}
        />
        {question["choices"][2].label}
        <input
          type="radio"
          name="question"
          value={question["choices"][3].id}
          onClick={handleInput}
        />
        {question["choices"][3].label}
      </div>
      <button
        onClick={(e) => {
          value.votes[1](value.votes[0] + 1);
          let div = document.getElementById("group");
          div.childNodes.forEach((element) => {
            if (element.checked) {
              element.checked = false;
            }
          });

          props.flag(false);
          
        }}
      >
        Submit Vote
      </button>
    </div>
  );
}
