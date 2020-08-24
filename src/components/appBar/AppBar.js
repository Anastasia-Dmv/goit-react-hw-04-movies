import React from 'react';
import Navigation from '../Navigation';
import style from './appBar.module.css';
const AppBar = () => {
  return (
    <header className={style.AppBar}>
      <Navigation />
    </header>
  );
};
export default AppBar;
