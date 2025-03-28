import React, { useState } from "react";

function Questionnaire({ info }) {
  const { _id, name, description, questions } = info;

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.target);
    const data = { testId: _id };

    for (let question of questions) {
      const answers = formData
        .getAll(question._id)
        .map((answer) => answer.trim());

      if (answers.length === 0 || answers.every((ans) => ans === "")) {
        setError(`Please answer all questions`);
        return;
      }

      data[question._id] =
        question.type === "multiple_choice" ? answers : answers[0];
    }

    console.log("Submitted answers:", data);
    setSubmittedData(data);
  };

  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <form onSubmit={handleSubmit}>
        <ol>
          {questions.map((q) => (
            <li key={q._id}>
              <p>{q.questionText}</p>
              {q.type === "text" && <input type="text" name={q._id} required />}
              {q.type === "single_choice" &&
                q.options.map((option) => (
                  <label key={option}>
                    <input type="radio" name={q._id} value={option} required />
                    {option}
                  </label>
                ))}
              {q.type === "multiple_choice" &&
                q.options.map((option) => (
                  <label key={option}>
                    <input type="checkbox" name={q._id} value={option} />
                    {option}
                  </label>
                ))}
            </li>
          ))}
        </ol>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Your Answers:</h3>
          <ul>
            {questions.map((q) => (
              <li key={q._id}>
                <strong>{q.questionText}:</strong>
                {Array.isArray(submittedData[q._id])
                  ? submittedData[q._id].join(", ")
                  : submittedData[q._id]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Questionnaire;
