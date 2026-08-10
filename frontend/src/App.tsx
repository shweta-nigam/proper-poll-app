import { useEffect } from "react";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import AppRoutes from "./routes/AppRoutes.js";
import { socket } from "./socket/socket.js";
import { useLocation } from "react-router-dom";

function App() {

  const location  = useLocation();

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });

    return () => {  // cleanup function - after component unmount // unmount = Component removed from screen.
      socket.disconnect();
    };
  }, []);

  const hideNavbar = location.pathname.startsWith("/dashboard")

  // return (
  //   <>
  //     { !hideNavbar && <Navbar />}   //short-circuit evaluation
  //     <main className={hideNavbar ? "" : "pt-20"}>
  //       <AppRoutes />
  //     </main>
  //      {!hideNavbar && <Footer />}
  //   </>
  // );
  
  return (
    <>
    { !hideNavbar && <Navbar />} 
    {/* <main className={hideNavbar ? "" : "pt-20"}> */}
  <AppRoutes />
    {/* </main> */}

   {!hideNavbar && <Footer />}
</>
  );
}

export default App;
