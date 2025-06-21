import React from "react";

function IntegrationList({ list, onRemove }) {
  return (
    <div>
      <h2>Available Integrations</h2>
      {list.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.name}</h3>
          <p>Status: {item.status}</p>
          <p>API Key: {item.apiKey}</p>
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default IntegrationList;