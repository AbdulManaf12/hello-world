import { useState } from "react";
import "./App.css";
import PollDisplay from "./components/PollDisplay";
import UserParticipation from "./components/UserParticipation";

function App() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  const [val4, setVal4] = useState(0);
  const [flag, setflag] = useState(false);
  let questions = [
    {
      question: "What is your favorite programming language?",
      choices: [
        { id: 1, label: "JavaScript", votes: [val1, setVal1] },
        { id: 2, label: "Python", votes: [val2, setVal2] },
        { id: 3, label: "Java", votes: [val3, setVal3] },
        { id: 4, label: "C#", votes: [val4, setVal4] },
      ],
    },
  ];
  let btnHandler = () => {
    setflag(true);
  };
  return (
    <div className="App">
      <h1>Polling App</h1>
      <PollDisplay questionArray={questions} />
      {flag ? (
        <UserParticipation questionArray={questions} flag={setflag} />
      ) : (
        <button onClick={btnHandler}>Add Vote</button>
      )}
    </div>
  );
}

export default App;
