import React from 'react';

interface QueryExecutionControlsProps {
  onExecute: () => void;
  onClear: () => void;
}

const QueryExecutionControls: React.FC<QueryExecutionControlsProps> = ({ onExecute, onClear }) => {
  return (
    <div>
      <button onClick={onExecute}>Execute Query</button>
      <button onClick={onClear}>Clear Editor</button>
    </div>
  );
};

export default QueryExecutionControls;
