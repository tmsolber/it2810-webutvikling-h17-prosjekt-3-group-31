/*jshint esversion: 6 */
import React, { Component } from 'react';
import MainFocusText from './MainFocusText.js';
import './ModalPageCSS.css';

const ENTER_KEY = 13;

export class ModalPage extends Component {
    constructor(props) {
        super(props);
    }
    
    handleSubmit = (e) => {
        if (e.which === ENTER_KEY) {
            e.preventDefault();
            this.props.onUpdate(this.refs.input.value);
            this.refs.input.value = "";
        }
        localStorage.setItem('todo', JSON.stringify(this.props.values));
    };

    handlePropagation = (e) => {
        e.stopPropagation();
    };

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="backdrop" onClick={this.props.onClose}>
                <div className="modal" onClick={this.handlePropagation}>
                    <button type="button" className="close">
                        <span aria-hidden="true" onClick={this.props.onClose}>&times;</span>
                    </button>
                    <MainFocusText/>
                    <div className="form">
                        <input type="text" className="todo-input"  maxLength={50} ref="input" placeholder="ToDo's..."
                            onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder="ToDo's..."} onKeyDown={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalPage;
