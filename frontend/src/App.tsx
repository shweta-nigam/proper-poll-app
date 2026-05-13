import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import AppRoutes from "./routes/AppRoutes.js";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
