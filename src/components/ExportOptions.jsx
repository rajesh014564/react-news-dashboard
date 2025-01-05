import React from 'react';
import { saveAs } from 'file-saver';

function ExportOptions() {
  const exportData = () => {
    const blob = new Blob([JSON.stringify({ data: 'mock data' })], { type: 'application/json' });
    saveAs(blob, 'data.json');
  };

  return (
    <div>
      <h2>Export Options</h2>
      <button onClick={exportData}>Export JSON</button>
    </div>
  );
}

export default ExportOptions;
