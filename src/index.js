import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const WidgetDivs = document.querySelectorAll(".qualification_widget");

// Inject our React App into each
WidgetDivs.forEach((Div) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    Div
  );
});
