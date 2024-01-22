import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ModalOperations from "./context/ModalOperations.jsx";
import ConfirmDeleteProvider from "./context/ConfirmDeleteProvider.jsx";
import EditModalProvider from "./context/EditModalProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalOperations>
      <ConfirmDeleteProvider>
        <EditModalProvider>
          <App />
        </EditModalProvider>
      </ConfirmDeleteProvider>
    </ModalOperations>
  </React.StrictMode>
);
