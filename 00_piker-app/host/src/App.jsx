import React from "react";
import ReactDOM from "react-dom/client";

import ColorPicker from "ColorPicker/ColorPicker";

const App = () => (
  <>
  <h1 className="text-center bg-dark text-white p-2">Color picker</h1>
  <div className="container mt-4">
    <div className="row">
      <div className="col-12 col-md-4">Lista de colores</div>
      <div className="col-12 col-md-8"><ColorPicker /></div>
    </div>
  </div>
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
