import React from 'react';
import './NavBar.css';

interface ISetFunction{
  parentStateSetter: () => void;
}

function NavBar({ parentStateSetter }:ISetFunction):JSX.Element {
  const addCard = ():void => {
    parentStateSetter();
  };
  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar">
        <h3>Meus Cards</h3>
        <button type="button" onClick={addCard}>Adicionar Card</button>
      </div>
    </div>
  );
}

export default NavBar;
