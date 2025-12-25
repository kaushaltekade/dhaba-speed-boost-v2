import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("%cDeveloped by koushaltekade89@gmail.com", "color: #ff9900; font-size: 16px; font-weight: bold; background: #222; padding: 10px; border-radius: 5px;");

createRoot(document.getElementById("root")!).render(<App />);
