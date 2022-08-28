import React from 'react';
import s from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div className={s.container}>
      <input type='text' />
      <button className={s.bton} onClick={() => onSearch('buscando ciudad')}>Agregar</button>
    </div>)
};