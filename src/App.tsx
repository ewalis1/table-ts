import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Form from './components/Form';
import Table from './components/Table';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <Link to="/">Table</Link>
        <Link to="/form">Form</Link>
      </div>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
