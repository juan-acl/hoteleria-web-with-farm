import { createRoot } from "react-dom/client";
import { Main } from "./main";
import "./index.css";

const container = document.querySelector("#root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

root.render(<Main />);