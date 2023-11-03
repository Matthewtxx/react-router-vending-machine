import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack from './Snack';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Vending Machine</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/snack/:id" element={<Snack />} />
        <Route path="/" element={<VendingMachine />} />
      </Routes>
    </Router>
  );
}

export default App;


