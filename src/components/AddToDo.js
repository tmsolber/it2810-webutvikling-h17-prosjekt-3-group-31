import React, {Component} from 'react';
import plus from '../images/plus.png';
import '../css/Buttons.css';
import {Popup} from 'semantic-ui-react'
/* The add todo-button. Shows "Click to add todo" when hoovered over*/
class AddToDo extends Component{
    render() {
        return (
            <div className="add-btn">
                {/* Semantic UI popup on the plus button */}
                <Popup
                    trigger={<img src={plus} alt="add-to-do" className="plus" onClick={this.props.show}/>}
                    content={'Click to add todo'}
                />
            </div>
        );
    }
}

export default AddToDo;