import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-github';

interface SQLQueryEditorProps {
  onQueryChange: (query: string) => void;
}

const SQLQueryEditor: React.FC<SQLQueryEditorProps> = ({ onQueryChange }) => {
  const [query, setQuery] = useState<string>('');

  const handleQueryChange = (value: string) => {
    setQuery(value);
    onQueryChange(value);
  };

  return (
    <div>
      <h3>SQL Query Editor</h3>
      <AceEditor
        mode="sql"
        theme="github"
        onChange={handleQueryChange}
        value={query}
        name="sql-editor"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default SQLQueryEditor;
