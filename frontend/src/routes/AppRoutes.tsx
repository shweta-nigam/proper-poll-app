import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import PollsPage from "../pages/polls/PollsPage";
import CreatePollPage from "../pages/polls/CreatePollPage";
import ResponsePage from "../pages/polls/ResponsePage";
import PollAnalytics from "../pages/polls/PollAnalytics";
import RegisterPage from "../pages/auth/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/polls" element={<PollsPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/polls/create" element={<CreatePollPage />} />
        <Route path="/polls/:pollId/analytics" element={<PollAnalytics />} />
      </Route>

      <Route path="/polls/:pollId/respond" element={<ResponsePage />} />
    </Routes>
  );
};

export default AppRoutes;
