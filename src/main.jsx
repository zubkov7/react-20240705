import ReactDOM from "react-dom/client";
import { App } from "./components/app";

const rootElement = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(<App />);
