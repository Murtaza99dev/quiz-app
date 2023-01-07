import { useState } from "react";
import QuestionCard from "./component/QuestionCard";
import { fetchQuizQuestion } from "./API";
import { QuestionState, Difficulty } from "./API";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  incorrect_answer: string;
};

const TOTAL_QUESTION = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameOver] = useState(true);

  console.log(fetchQuizQuestion(TOTAL_QUESTION, Difficulty.EASY));

  const trivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestion(
      TOTAL_QUESTION,
      Difficulty.EASY
    );
    setQuestion(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const AnsChk = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQues = () => {};

  return (
    <div className="App">
      <h1>QUIZ APP</h1>
      {gameover || userAnswers.length === TOTAL_QUESTION ? (
        <button className="Start-Again" onClick={trivia}>
          Start
        </button>
      ) : null}
      {!gameover ? <p className="score">Score:</p> : null};
      {loading && <p className="loading">Loadiing...</p>};
      {!loading && !gameover && (
        <QuestionCard
          QuestionNum={number + 1}
          totalQuestion={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAns={userAnswers ? userAnswers[number] : undefined}
          callBack={AnsChk}
        />
      )}
      {!gameover &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTION - 1 ? (
        <button className="next" onClick={nextQues}>
          NextQuestion
        </button>
      ) : null}
      ;
    </div>
  );
}

export default App;
