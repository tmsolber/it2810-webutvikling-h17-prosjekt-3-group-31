/*jshint esversion: 6 */
import React, { Component } from 'react';
import MainFocusText from './MainFocusText.js';
import {Button} from 'semantic-ui-react';
import { Checkbox } from 'semantic-ui-react';
import './ModalPageCSS.css';

export class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            opacity: 0.1
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault(); 
        this.props.onUpdate(this.refs.input.value);
        this.refs.input.value = "";
    };

    handleChecked = () => {
        this.setState(prevState => ({
            checked: !prevState.checked,
            opacity: this.state.opacity == 0.1 ? 1 : 0.1
        }));

        
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
                        <input type="text" maxLength={50}ref="input" placeholder="ToDo's..." 
                            onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder="ToDo's..."} className="todo-input" />
                        <Checkbox className="check-notification" label="Add notification" onClick={this.handleChecked}/>
                    </div>
                    <div className="date-and-time" style={{opacity: this.state.opacity}}>
                        
                    </div>
                    <div className="submit-container">
                        <Button primary onClick={this.handleSubmit}>Submit</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalPage;
