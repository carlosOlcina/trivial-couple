import "./App.css";
import "./reset.css";
import "@fontsource/roboto/600.css";
import { useQuestionStore } from "./store/useQuestionStore";

function App() {
  const questions = useQuestionStore((state) => state.questions);
  const deleteFirstQuestion = useQuestionStore(
    (state) => state.deleteFirstQuestion,
  );

  return (
    <>
      <main onClick={deleteFirstQuestion}>
        <div className="card">{questions[0] ?? "Acabamos mi amooooor"}</div>
      </main>
    </>
  );
}

export default App;
