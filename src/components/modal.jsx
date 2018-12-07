import React from 'react';
import './modal.css'

const Modal = ({ handleClose, show, children }) => {
    return (
        <div className="dimmer">
            <div className="modal">
                <section className="modal-main">
                    {children}
                    <button onClick={handleClose}>close</button>
                </section>
            </div>
        </div>
    );
};

export default Modal;