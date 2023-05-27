import React from "react";

export default function PollDisplay(props) {
  let question = props.questionArray[0];
  return (
    <>
      <h4>{question["question"]}</h4>
      <p>Select the choices:</p>
      <div>
        <p>
          {question["choices"][0].label}: {question["choices"][0].votes}
        </p>
        <p>
          {question["choices"][1].label}: {question["choices"][1].votes}
        </p>
        <p>
          {question["choices"][2].label}: {question["choices"][2].votes}
        </p>
        <p>
          {question["choices"][3].label}: {question["choices"][3].votes}
        </p>
      </div>
    </>
  );
}
