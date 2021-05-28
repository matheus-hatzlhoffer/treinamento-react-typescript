import React, { useState, useCallback } from 'react';
import Cards from '../components/Cards';
import NavBar from '../components/NavBar';
import './Home.css';

function Home():JSX.Element {
  // mundo javascript
  const [cards, setCards] = useState<number[]>([]);

  const wrapperSetCardState = useCallback(() => {
    setCards([...cards, cards.length]);
  }, [setCards, cards]);

  return (
    // mundo JSX
    <div>
      <NavBar
        parentStateSetter={wrapperSetCardState}
      />
      <div className="card-number">
        <h4>
          Você tem
          {' '}
          {cards.length}
          {' '}
          Cards
        </h4>
      </div>
      <div className="cards">
        {cards.map((title) => <Cards title={title} />)}
      </div>
    </div>
  );
}

export default Home;
