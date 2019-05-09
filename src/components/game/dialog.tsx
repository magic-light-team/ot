import React from 'react';
import './dialog.css'

import { DialogType } from '../../info/data.interfaces';

export interface DialogProps { //StateFromProps
    dialog: string,
    dialogType?: DialogType,
}

const Dialog: React.FC<DialogProps> = ({ dialog, dialogType }) => {
    return (
        <div className={"dialog-box dialog " + (dialogType || '')} style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/dialog/' + (dialogType || 'left') + '.png)' }}>
            {dialog}</div>
    );
};

export default Dialog;