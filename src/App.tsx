import { useState } from "react";
import QuestionCard from "./component/QuestionCard";
import { fetchQuizQuestion } from "./API";
import { QuestionState, Difficulty } from "./API";

type AnswerObject = {
  question:string;
  answer:string;
  correct:boolean;
  incorrect_answer:string;
}

const TOTAL_QUESTION = 10;


function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameOver] = useState(true);

  console.log(fetchQuizQuestion( TOTAL_QUESTION, Difficulty.EASY));

  const trivia = async () => {};

  const AnsChk = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQues = () => {};

  return (
    <div className="App">
      <h1>QUIZ APP</h1>
      <button className="Start-Again" onClick={trivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <QuestionCard QuestionNum={number + 1} totalQuestion={TOTAL_QUESTION} question={questions[number].question} answers={questions[number].answer} userAns={userAnswers ? userAnswers[number] : undefined} callBack={AnsChk}/>
      <button className="next" onClick={nextQues}>
        NextQuestion
      </button>
    </div>
  );
}

export default App;
