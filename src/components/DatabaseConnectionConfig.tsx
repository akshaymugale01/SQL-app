import React, { ChangeEvent, useState } from 'react';

interface DatabaseConfig {
  type: string;
}

const DatabaseConnectionConfig: React.FC<{ onConfigSubmit: (config: DatabaseConfig) => void }> = ({ onConfigSubmit }) => {
  const [config, setConfig] = useState<DatabaseConfig>({ type: '' });

  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // Update the database type in the state
    setConfig({ ...config, type: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Call the callback function with the updated config
    onConfigSubmit(config);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Database Type:
        <select name="type" value={config.type} onChange={handleInputChange}>
          <option value="">Select...</option>
          <option value="bigquery">Google BigQuery</option>
          <option value="snowflake">Snowflake</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DatabaseConnectionConfig;
