import React from 'react';
import { useParams, Link } from 'react-router-dom';
import snacks from './snackData'; 
import './styles.css'; 

const Snack = () => {
    const { id } = useParams();
    const selectedSnack = snacks.find((snack) => snack.id === parseInt(id));
  
    if (!selectedSnack) {
      return <div>Snack not found.</div>;
    }
  
    return (
      <div className="container">
        <h1>{selectedSnack.name}</h1>
        <p>{selectedSnack.description}</p>
        <Link to="/">Back to Vending Machine</Link>
      </div>
    );
  };

export default Snack;