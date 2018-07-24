import React,{ Component } from 'react';
import classes from './Modal.css'
import Aux from "../../hoc/Auxiliary";
import BackDrop from "../BackDrop/BackDrop";

class Modal extends Component  {
    escFunction = (event) => {
        if(event.keyCode === 27) {
            this.props.modalClosed()
        }
    };

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
    }
    render() {
        return (
            <Aux>

                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    <button type="button" className="close text-right" aria-label="Close" onClick={this.props.modalClosed}>
                        <span aria-hidden="true">&times; </span>
                    </button>
                    {this.props.modalContent}
                </div>
            </Aux>
        );
    }

}


export default Modal;
