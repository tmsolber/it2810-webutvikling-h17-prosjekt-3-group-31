
import React, { Component } from 'react';
import './AddToDo.css'
import {Checkbox} from 'semantic-ui-react';

const formStyle = {
    display: 'block',
    padding: '0.01em 16px',
    paddingTop: 10,
    paddingBottom: 10
};

export class AddToDo extends Component {
    constructor(props) {
        super(props);
    }
    
    handleSubmit = (e) => {
        e.preventDefault(); 
        this.props.onUpdate(this.refs.input.value);
        this.refs.input.value = "";
    };
    
    render() {
        return(
            <div className="form" style={formStyle}>
                <input type="text" ref="input" placeholder="Click on the checkbox if you want to be notified..." className="todo-input" />
                <Checkbox className="check-notification" label="Add notification"/>
            </div>
        );
    }
}

export default AddToDo;