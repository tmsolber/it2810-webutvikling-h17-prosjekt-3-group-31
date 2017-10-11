import React, { Component } from 'react';
import './Documentation.css';
import './ModalPageCSS.css';
import DocumentationText from './DocumentationText.js';

export class Documentation extends Component {

    handlePropagation = (e) => {
        e.stopPropagation();
    };

    render() {
        if (!this.props.showD) {
            return null;
        }
        return (
            <div className="backdrop-info" onClick={this.props.onClose}>
                <div className="modal-info" onClick={this.handlePropagation}>
                    <button type="button" className="close">
                        <span aria-hidden="true" onClick={this.props.onClose}>&times;</span>
                    </button>
                    <DocumentationText/>
                </div>
            </div>
        );
    }
}

export default Documentation;
