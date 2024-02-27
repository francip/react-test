import { createRoot } from "react-dom/client";

import { App } from "./components/App";

const container = document.getElementById("app");

if (container === null) throw new Error("No app container found");

const root = createRoot(container);
root.render(<App num={1234} />);
