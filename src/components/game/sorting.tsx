import React, { Component,useState } from 'react';
import './sorting.css'

import { connect } from 'react-redux';
import { IState } from '../../reducers/initialState';

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export interface Props { //StateFromProps
    // stageDialog:string,
    // dialogType?:DialogType,
}

export interface State { // DispatchFromProps
    // changePage: () => void;
}

class Sorting extends Component<Props, State> {
    state = {}

    // const [cards, setCards] = useState([
    //   {
    //     id: 1,
    //     text: 'Write a cool JS library',
    //   },
    //   {
    //     id: 2,
    //     text: 'Make it generic enough',
    //   },
    //   {
    //     id: 3,
    //     text: 'Write README',
    //   },
    //   {
    //     id: 4,
    //     text: 'Create some examples',
    //   },
    //   {
    //     id: 5,
    //     text:
    //       'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    //   },
    //   {
    //     id: 6,
    //     text: '???',
    //   },
    //   {
    //     id: 7,
    //     text: 'PROFIT',
    //   },
    // ])

    // const moveCard = (dragIndex: number, hoverIndex: number) => {
    //   const dragCard = cards[dragIndex]
    //   setCards(
    //     update(cards, {
    //       $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
    //     }),
    //   )
    // }

    render() {
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
            <div className="end_btn"></div>
          </div>
        );
    }
}

const mapStateToProps = (allState: { gameState: IState }) => ({
    // stageDialog: (allState.gameState.currentStage &&  allState.gameState.currentStage.dialog) || '',
    // dialogType: allState.gameState.currentStage && allState.gameState.currentStage.dialogType
});

export default connect(mapStateToProps)(Sorting);

// export default Dialog;
