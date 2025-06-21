import React, { useState } from "react";

function IntegrationForm({ onAdd }) {
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !apiKey) return;
    onAdd({ name, apiKey, status: "Active" });
    setName("");
    setApiKey("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Integration Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button type="submit">Add Integration</button>
    </form>
  );
}

export default IntegrationForm;