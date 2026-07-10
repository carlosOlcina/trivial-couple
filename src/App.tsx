import "./App.css";
import "./reset.css";
import "@fontsource/roboto/600.css";
import { useQuestionStore } from "./store/useQuestionStore";
import { useEffect, useState } from "react";
import { DURATION } from "./data/const";

function App() {
  const questions = useQuestionStore((state) => state.questions);
  const deleteFirstQuestion = useQuestionStore(
    (state) => state.deleteFirstQuestion,
  );

  const [timeLeft, setTimeLeft] = useState(60);
  const handleClick = () => {
    setTimeLeft(60)
    deleteFirstQuestion()
  }

  useEffect(() => {
    if (timeLeft === 0) {
      deleteFirstQuestion();
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => (prev === 0 ? DURATION : prev - 1));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, deleteFirstQuestion]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <main onClick={handleClick}>
        <time className="countdown" dateTime="PT1M">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </time>
        <div className="card">{questions[0] ?? "Acabamos mi amooooor"}</div>
      </main>
    </>
  );
}

export default App;
