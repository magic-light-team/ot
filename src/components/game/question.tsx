import React from 'react';

import { option, DialogType } from '../../info/data.interfaces';

//import Transition from 'react-transition-group/Transition';

export interface QuestionProps { //StateFromProps
    dialog: string,
    dialogType?: DialogType,
    options: option[],
    changeStage: Function,
}

const Question: React.FC<QuestionProps> = ({ dialog, dialogType, options, changeStage }) => {
    return (
        <div>
            <div className={"description-wrapper dialog " + (dialogType || '')} style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/dialog/' + (dialogType || 'left') + '.png)' }}>
                {dialog}</div>
            <div className="btn-wrapper">
                {options.map(op =>
                    <button
                        onClick={event => changeStage(event, op.nextDialogId, op.score, (op.backgroundPic || ''))}
                        key={op.optionId}
                        data-score={op.score}
                        //data-backgroundPic={(op.backgroundPic || '')}
                        className="btn red-color">{op.title}</button>)}
            </div>
        </div>
    );
};

export default Question;
