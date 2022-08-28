import React, { useState } from 'react';
import React from 'react';
import s from './Timer.css';


const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  return (
    <div className="app">
      <div className='time'>
        {segundos} s
      </div>
      {/* Componente Timer */}
      <div className="row">
        <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`}>
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button-secondary">
          Reset
        </button>
      </div>
      <button className="button">
          {tipo}
      </button>
      <input type="number" placeholder="Ingresa Segundos" autoComplete="off"/>
    </div>

  );
};

export default Timer;
