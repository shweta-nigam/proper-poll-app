import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
    <GoogleOAuthProvider
      clientId={
        import.meta.env.VITE_GOOGLE_CLIENT_ID
       
      }
      >
     
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </GoogleOAuthProvider>
     </AuthProvider>
  </StrictMode>,
);
