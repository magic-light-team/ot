import React, { useState } from 'react';
import './sorting.css'

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './card';
import { option } from '../../info/data.interfaces';

export interface SortingProps {
  // stageDialog:string,
  // dialogType?:DialogType,
  options?: option[],
  score?:number,
}

const style = {
  width: 400,
}

// interface ICard { index: number; text: string };
// class cardClass implements ICard{
class cardClass{
  constructor(index: number, text: string){
    this.index=index;
    this.text=text;
  }
  index: number;
  text: string;
}

const Sorting: React.FC<SortingProps> = ({options }) => {
  // const[cards2,setCards2] = useState(options.map((opt,i)=> new cardClass(i,opt.title)))
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
    let newCards = [...cards];
    newCards[dragIndex] = cards[hoverIndex];
    newCards[hoverIndex] = cards[dragIndex];
    setCards(newCards);
  }

  const checkCards = () =>{
    let isSorted = true;
    for (let index = 0; index < cards.length-1; index++) {
      if(cards[index].id>cards[index+1].id)
      {
        isSorted=false;
        break;
      }
    }

    //
  }

  return (
    <div>
      <div className={"description-wrapper dialog "} style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/dialog/left.png)' }}>
                مرتب کنید</div>
      {/* <div className="question_dialoug"></div> */}
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
          onClick={checkCards}
          className="btn red-color">بررسی جواب</button>
      </div>
    </div>
  );
};

export default Sorting;
