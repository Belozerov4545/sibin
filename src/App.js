import React from 'react';
import './App.css';
import BasicTable from './components/Table';
import SelectLabels from './components/Select';


function App() {
  return (
      <div className="App">
        <SelectLabels />
        <BasicTable />
      </div>
  );
}

export default App;
