import React from 'react';
import { useNavigate } from 'react-router-dom';

function Zurueck() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')} style={zurueckButtonStyle}>
      Zurück zur Hauptseite
    </button>
  );
}

const zurueckButtonStyle = {
  padding: '10px 20px',
  fontSize: '1.2rem',
  backgroundColor: '#f39c12',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontFamily: 'Creepster, cursive',
  marginTop: '20px',
  transition: 'background-color 0.3s ease',
};

export default Zurueck;
