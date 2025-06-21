import React, { useState } from "react";
import IntegrationList from "./components/IntegrationList";
import IntegrationForm from "./components/IntegrationForm";
import data from "./data";
import "./App.css";

function App() {
  const [integrations, setIntegrations] = useState(data);

  const addIntegration = (newIntegration) => {
    setIntegrations([...integrations, { ...newIntegration, id: Date.now() }]);
  };

  const removeIntegration = (id) => {
    setIntegrations(integrations.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <h1>🔗 Third-Party Integration Dashboard</h1>
      <IntegrationForm onAdd={addIntegration} />
      <IntegrationList list={integrations} onRemove={removeIntegration} />
    </div>
  );
}

export default App;