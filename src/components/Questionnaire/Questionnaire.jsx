import React, { useState } from "react";

function Questionnaire({ info }) {
  const { _id, name, description, questions } = info;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const isEmptyValues = [...formData.values()].includes("");
    if (isEmptyValues) {
      alert("Please, answer all questions.");
      return;
    }
    const data = { testId: _id };
    for (let name of formData.keys()) {
      const values = formData.getAll(name);
      data[name] = values.length > 1 ? values.join(", ") : values[0];
    }
    console.log("Submitted answers :", data);
  };

  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <div key={q._id}>
            <p>{q.questionText}</p>
            {q.type === "text" && <input type="text" name={q.questionText} />}
            {q.type === "single_choice" &&
              q.options.map((option) => (
                <label key={option}>
                  <input type="radio" name={q.questionText} value={option} />
                  {option}
                </label>
              ))}
            {q.type === "multiple_choice" &&
              q.options.map((option) => (
                <label key={option}>
                  <input type="checkbox" name={q.questionText} value={option} />
                  {option}
                </label>
              ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Questionnaire;
