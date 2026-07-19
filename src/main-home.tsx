import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PortfolioQRCode } from "./components/PortfolioQRCode";

const qrRoot = document.getElementById("portfolio-qr-root");

if (qrRoot) {
  createRoot(qrRoot).render(
    <StrictMode>
      <PortfolioQRCode url="https://chliop.github.io/connect" />
    </StrictMode>,
  );
}
