import React from 'react';
import './Card.css';

interface ITitle{
  title: number
}

function Cards({ title }: ITitle):JSX.Element {
  return (
    <div className="card-wrapper">
      <div className="outer-card">
        <div className="inner-card">
          <h1>{title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus sequi iste</p>
          <p className="actions">actions</p>
          <div className="buttons">
            <button type="button" aria-label="botão 1"><div /></button>
            <button type="button" aria-label="botão 2"><div /></button>
            <button type="button" aria-label="botão 3"><div /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
