import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = () => {
  return (
    <div
      className="min-h-screen flex"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Sidebar */}
      <aside
        className="fixed left-0 top-0 h-screen w-72 border-r"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
        }}
      >
        <DashboardSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-72 flex flex-col">
        {/* Header */}
        <header
          className="sticky top-0 z-40 border-b backdrop-blur-md"
          style={{
            background: "rgba(17,17,17,0.85)",
            borderColor: "var(--border)",
          }}
        >
          <DashboardHeader />
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 md:p-10">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;