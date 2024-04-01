import React from "react";
import ReactDOM from "react-dom";
import ColorList from "./components/ColorList";

const App = () => (
    <ColorList/>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
