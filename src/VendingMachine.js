import React from 'react';
import { Link } from 'react-router-dom';
import snacks from './snackData'; 
import './styles.css'; 

const VendingMachine = () => {
  return (
    <div className="container">
      <h1>Vending Machine</h1>
      <ul>
        {snacks.map((snack) => (
          <li key={snack.id}>
            <Link to={`/snack/${snack.id}`}>{snack.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendingMachine;
