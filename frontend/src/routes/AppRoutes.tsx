import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import PollsPage from "../pages/polls/PollsPage";
import CreatePollPage from "../pages/polls/CreatePollPage";
import ResponsePage from "../pages/polls/ResponsePage";
import PollAnalytics from "../pages/polls/PollAnalytics";
import RegisterPage from "../pages/auth/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

// dashboard
import DashboardLayout from "../components/dashboard/DashboardLayout";
import Polls from "../pages/dashboard/Polls";
import Analytics from "../pages/dashboard/Analytics";
import Participants from "../pages/dashboard/Participants";
import Settings from "../pages/dashboard/Settings";
import Home from "../pages/dashboard/Home";



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


    {/* Protected Dashboard */}
<Route element={<ProtectedRoute />}>
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<Navigate to="home" replace />} />

    <Route path="home" element={<Home />} />
    <Route path="polls" element={<Polls />} />
    <Route path="analytics" element={<Analytics />} />
    <Route path="participants" element={<Participants />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Route>

    </Routes>
  );
};

export default AppRoutes;
