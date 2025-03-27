import { Link } from "react-router-dom";

function QuestionnairesList({ items }) {
  return (
    <ul>
      {items.map((item, key) => {
        return (
          <li key={item._id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>
              <strong>Total questions: </strong>
              {item.questionsCount}
            </p>
            <p>
              <strong>Total completions: </strong> {item.completions}
            </p>
            <button>Delete</button>
            <button>Update</button>
            <Link to={`${item._id}`}>Answer</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default QuestionnairesList;
