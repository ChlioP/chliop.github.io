import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConnectPage } from "./pages/ConnectPage";

createRoot(document.getElementById("connect-root")!).render(
  <StrictMode>
    <ConnectPage />
  </StrictMode>,
);
