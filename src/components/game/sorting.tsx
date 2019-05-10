import React, { useState } from 'react';
import './sorting.css'

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './card';

export interface SortingProps {
  // stageDialog:string,
  // dialogType?:DialogType,
}

const style = {
  width: 400,
}

const Sorting: React.FC<SortingProps> = ({ }) => {

  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      text: 'Make it generic enough',
    },
    {
      id: 3,
      text: 'Write README',
    },
    {
      id: 4,
      text: 'Create some examples',
    },
    {
      id: 5,
      text:
        'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    },
    {
      id: 6,
      text: '???',
    },
    {
      id: 7,
      text: 'PROFIT',
    },
  ])

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const dragCard = cards[dragIndex];
    const hoverCard = cards[hoverIndex];
    cards[dragIndex] = hoverCard;
    cards[hoverIndex] = dragCard;
    setCards(cards);
  }

  return (
    <div>
      <div className="question_dialoug"></div>
      <DragDropContextProvider backend={HTML5Backend}>
        <div style={style}>
          {cards.map((card, i) => (
            <Card
              key={card.id}
              index={i}
              id={card.id}
              text={card.text}
              moveCard={moveCard}
            />
          ))}
        </div>
      </DragDropContextProvider>
      <div className="btn-wrapper">
        <button
          // onClick={event => }
          className="btn red-color">بررسی جواب</button>
      </div>
    </div>
  );
};

export default Sorting;
