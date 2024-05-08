import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header/Header.js";
import { NaturalLanguageCreateItemForm } from "./components/NaturalLanguageCreateItemForm/NaturalLanguageCreateItemForm.js";

const container = document.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Header />
      <NaturalLanguageCreateItemForm />
    </StrictMode>
  );
}
