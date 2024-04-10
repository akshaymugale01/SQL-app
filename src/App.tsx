import React, { useState } from 'react';
import DatabaseConnectionConfig from './components/DatabaseConnectionConfig';
import SQLQueryEditor from './components/SQLQueryEditor';
import QueryExecutionControls from './components/QueryExecutionControls';
import ResultDisplay from './components/ResultDisplay';
import { executeQuery, fetchDatabaseData } from './services/APIService';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  const executeQueryHandler = async () => {
    try {
      const response = await executeQuery(query);
      if (response.status === 200) {
        setResults(response.data);
        setError(null);
      } else {
        setError(response.data.error || 'Unknown error occurred.');
      }
    } catch (error) {
      setError((error as Error).message || 'An error occurred while executing the query.');
    }
  };

  const clearEditor = () => {
    setQuery('');
    setResults([]);
    setError(null);
  };

  const handleDatabaseConfigSubmit = async (config: any) => {
    try {
      const response = await fetchDatabaseData(config.type);
      if (response.status === 200) {
        // Handle successful response
        console.log(response.data);
      } else {
        setError(response.data.error || 'Unknown error occurred.');
      }
    } catch (error) {
      setError((error as Error).message || 'An error occurred while fetching database data.');
    }
  };

  return (
    <div>
      <h1>SQL Editor</h1>
      <DatabaseConnectionConfig onConfigSubmit={handleDatabaseConfigSubmit} />
      <SQLQueryEditor onQueryChange={handleQueryChange} />
      <QueryExecutionControls onExecute={executeQueryHandler} onClear={clearEditor} />
      {error && <div>Error: {error}</div>}
      <ResultDisplay results={results} />
    </div>
  );
};

export default App;
