import "./App.css";
import PollDisplay from "./components/PollDisplay";

function App() {
  let questions = [
    {
      question: "What is your favorite programming language?",
      choices: [
        { id: 1, label: "JavaScript", votes: 0 },
        { id: 2, label: "Python", votes: 0 },
        { id: 3, label: "Java", votes: 0 },
        { id: 4, label: "C#", votes: 0 },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Polling App</h1>
      <PollDisplay questionArray={questions} />
    </div>
  );
}

export default App;
