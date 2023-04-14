import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalWrapper } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = e => {

        if(e.code === 'Escape') {
            this.props.onClose();
        };
    };

    handleBackdrop = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose();
        };
    };

render() {
    return createPortal(
        <Backdrop  onClick={this.handleBackdrop}>
            <ModalWrapper>{this.props.children}</ModalWrapper>
        </Backdrop>,
     modalRoot);
};
};