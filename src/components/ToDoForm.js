import React, {Component} from 'react';
import '../css/ToDoForm.css';

// Assigns the enter key to a const.
const ENTER_KEY = 13;

//When the popup appears, this makes the user able to write down todos
//and click enter to add it to the ToDoPage

class ToDoForm extends Component {
    constructor() {
        super();
        //binds the event handlers
        this.handleSubmit = this.handleSubmit.bind(this);
        this.stopPropagation = this.stopPropagation.bind(this);
    }
    //Handles the     
    handleSubmit(e){
        if (e.which === ENTER_KEY) {
            e.preventDefault();
            this.props.onUpdate(this.refs.input.value);
            this.refs.input.value = "";
        }
    }
    //Makes sure the current event from bubbling phases
    stopPropagation(e){
        e.stopPropagation();
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="backdrop" onClick={this.props.onClose}>
                <div className="modal" onClick={this.stopPropagation}>
                    <button type="button" className="close">
                        <span aria-hidden="true" onClick={this.props.onClose}>&times;</span>
                    </button>
                    <h1 className="focus-text">What is your main focus today?</h1>
                    <div className="form">
                        <input type="text" maxLength={50} ref="input" placeholder="ToDo's..."
                               onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder="ToDo's..."}
                               onKeyDown={this.handleSubmit} className="todo-input" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoForm;