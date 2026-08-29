import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PortfolioQRCode } from "./components/PortfolioQRCode";

const qrRoot = document.getElementById("portfolio-qr-root");

const menuButton = document.querySelector<HTMLButtonElement>(".nav-menu-toggle");
const navigation = document.getElementById("primary-navigation");

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Open navigation menu");
  navigation?.classList.remove("nav-links--open");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu",
  );
  navigation?.classList.toggle("nav-links--open", !isOpen);
});

navigation?.addEventListener("click", (event) => {
  if ((event.target as HTMLElement).closest("a")) closeMenu();
});

document.addEventListener("click", (event) => {
  const target = event.target as Node;
  if (!menuButton?.contains(target) && !navigation?.contains(target)) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuButton?.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});

if (qrRoot) {
  createRoot(qrRoot).render(
    <StrictMode>
      <PortfolioQRCode url="https://chliop.github.io/connect" />
    </StrictMode>,
  );
}
