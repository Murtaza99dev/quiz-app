import React from "react";

type Props = {
  question: string;
  answers: string[];
  callBack: any;
  userAns: boolean;
  QuestionNum: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callBack,
  userAns,
  QuestionNum,
  totalQuestion,
}) => (
  <div>
    <p className="Number">
      Question: {QuestionNum} / {totalQuestion}
    </p>
   <p dangerouslySetInnerHTML={{__html:question}}/>
   <div>
    {answers.map(answer => (
        <div>
            <button disabled={userAns} onClick={callBack}>
                <span dangerouslySetInnerHTML={{__html:answers}}/>
            </button>
        </div>
    ))}
   </div>
  </div>
);

export default QuestionCard;
