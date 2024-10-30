// src/components/Reporting.jsx
import React from 'react';

function Reporting() {
  return (
    <div id="reporting" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Reporting</h2>
      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2">View Reports</button>
      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2">Export Reports</button>
    </div>
  );
}

export default Reporting;
