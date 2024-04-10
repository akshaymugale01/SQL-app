import React from 'react';

interface ResultDisplayProps {
  results: any[];
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ results }) => {
  if (results.length === 0) {
    return <div>No results to display</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(results[0]).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((value: unknown, columnIndex: number) => (
              <td key={columnIndex}>{String(value)}</td> // Explicitly cast value to string
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultDisplay;
