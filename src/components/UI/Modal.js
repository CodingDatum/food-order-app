import React from 'react';
import ReactDOM from 'react-dom';

import styles from "./Modal.module.css";

const Backdrop = props => {

    return <div className={styles.backdrop} onClick={props.onCloseCart}/>

}

const ModalOverlay = props => {

    return (
        <div className={styles.modal}>

            <div className={styles.content}>{props.children}</div>
        
        </div>
    )

}

const portalLocation = document.getElementById("overlays");

const Modal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, portalLocation)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalLocation)}
        </React.Fragment>
    )
}

export default Modal;