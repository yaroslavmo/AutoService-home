import React from 'react';
import classes from './Modal.css'
import Aux from "../../hoc/Auxiliary";
import BackDrop from "../BackDrop/BackDrop";

const Modal = function (props) {
    return (
        <Aux>

            <BackDrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
             style={{
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
             }}>
            <button type="button" className="close text-right" aria-label="Close" onClick={props.modalClosed}>
                <span aria-hidden="true">&times; </span>
            </button>
            {props.modalContent}
        </div>
        </Aux>
    );
};

export default Modal;
