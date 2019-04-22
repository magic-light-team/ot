import React from 'react';
import './modal.css'
import BigButton from './bigbutton';

const Modal = ({ pauseGame, changePage }) => {
    return (
        <div className="dimmer" onClick={event => pauseGame(event,false) }>
            <div className="modal">
                <h1>منو</h1>
                <BigButton id="1" text="ادامه بازی"  arg="" clickHandle={pauseGame} color="" />
                <BigButton id="2" text="شروع دوباره" arg="chapterPage" clickHandle={changePage} color="" />
                <BigButton id="3" text="منوی بازی"   arg="startPage" clickHandle={changePage} color="" />
            </div>
        </div>
    );
};

export default Modal;