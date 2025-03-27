import axios from "axios";

axios.defaults.baseURL =
  "https://questionnaireapi-w3yd.onrender.com/questionnaires/";
export const getAllQuestionnaires = async () => {
  const response = await axios.get("/");
  return response.data.data;
};
export const getQuestionnaireById = async (id) => {
  const response = await axios.get(`/${id}`);
  return response.data.data;
};
