import Option from "./Option";
function Questions({ questions, dispatch, answer }) {
  console.log(questions);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option
        questions={questions}
        key={questions.question}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}

export default Questions;
