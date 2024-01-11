function Option({ questions, dispatch, answer }) {
  let hasAnswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, i) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
