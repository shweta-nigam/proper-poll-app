import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import PollsPage from "../pages/polls/PollsPage";
import CreatePollPage from "../pages/polls/CreatePollPage";
// import RegisterPage from "../pages/auth/RegisterPage.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />

      {/* <Route
          path="/register"
          element={<RegisterPage />}
        /> */}

      <Route path="/polls" element={<PollsPage />} />

       <Route path="/polls/create" element={<CreatePollPage />} />
    </Routes>
  );
};

export default AppRoutes;
