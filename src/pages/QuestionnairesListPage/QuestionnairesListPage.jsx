import React, { useEffect, useState } from "react";
import { getAllQuestionnaires } from "../../api-requests/questionnaires";
import QuestionnairesList from "../../components/QuestionnairesList/QuestionnairesList";

function QuestionnairesListPage() {
  const [questionnaires, setQuestionnaires] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchQuestionnaires() {
      try {
        setError(null);
        setLoading(true);
        const data = await getAllQuestionnaires();
        setQuestionnaires(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestionnaires();
  }, []);
  return (
    <>
      <h1>Questionnaire Builder App</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && <p>{error}</p>}
      {questionnaires.length > 0 && (
        <QuestionnairesList items={questionnaires} />
      )}
    </>
  );
}

export default QuestionnairesListPage;
