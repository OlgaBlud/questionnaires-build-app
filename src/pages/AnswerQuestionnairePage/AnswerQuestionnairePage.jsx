import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionnaireById } from "../../api-requests/questionnaires";
import Questionnaire from "../../components/Questionnaire/Questionnaire";

function AnswerQuestionnairePage() {
  const { id } = useParams();
  const [questionnaire, setQuestionnaire] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchQuestionnaireById() {
      try {
        setError(null);
        setLoading(true);
        const data = await getQuestionnaireById(id);
        setQuestionnaire(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestionnaireById();
  }, [id]);
  return (
    <>
      {loading && <p>Loading data, please wait...</p>}
      {error && <p>{error}</p>}
      {questionnaire && <Questionnaire info={questionnaire} />}
    </>
  );
}

export default AnswerQuestionnairePage;
