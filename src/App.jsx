import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import QuestionnairesListPage from "./pages/QuestionnairesListPage/QuestionnairesListPage";
import AnswerQuestionnairePage from "./pages/AnswerQuestionnairePage/AnswerQuestionnairePage";
import EditQuestionnairePage from "./pages/EditQuestionnairePage/EditQuestionnairePage";
import CreateQuestionnairePage from "./pages/CreateQuestionnairePage/CreateQuestionnairePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/questionnaire">Questionnaires List</NavLink>
        <NavLink to="/create-questionnaire">Create Questionnaire</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questionnaire" element={<QuestionnairesListPage />} />
        <Route
          path="/questionnaire/:id"
          element={<AnswerQuestionnairePage />}
        />

        <Route path="/edit-questionnaire" element={<EditQuestionnairePage />} />
        <Route
          path="/create-questionnaire"
          element={<CreateQuestionnairePage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
