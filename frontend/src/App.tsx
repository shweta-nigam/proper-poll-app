import { useEffect } from "react";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import AppRoutes from "./routes/AppRoutes.js";
import { socket } from "./socket/socket.js";

function App() {
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });

    return () => {  // cleanup function - after component unmount // unmount = Component removed from screen.
      socket.disconnect();
    };
  }, []);

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
