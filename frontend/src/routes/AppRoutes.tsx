import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import PollsPage from "../pages/polls/PollsPage";
import CreatePollPage from "../pages/polls/CreatePollPage";
import ResponsePage from "../pages/polls/ResponsePage";
import PollAnalytics from "../pages/polls/PollAnalytics";
import RegisterPage from "../pages/auth/RegisterPage";
// import RegisterPage from "../pages/auth/RegisterPage.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* <Route
          path="/register"
          element={<RegisterPage />}
        /> */}

      <Route path="/polls" element={<PollsPage />} />

      <Route path="/polls/create" element={<CreatePollPage />} />

      <Route path="/polls/:pollId/respond" element={<ResponsePage />} />

      <Route path="/polls/:pollId/analytics" element={<PollAnalytics />} />
    </Routes>
  );
};

export default AppRoutes;
