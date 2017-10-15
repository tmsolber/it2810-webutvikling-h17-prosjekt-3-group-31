import React, {Component} from 'react';
import plus from '../images/plus.png';
import '../CSS/Buttons.css';
import {Popup} from 'semantic-ui-react'

class AddToDo extends Component{
    render() {
        return (
            <div className="add-btn">
                <Popup
                    trigger={<img src={plus} alt="add-to-do" className="plus" onClick={this.props.show}/>}
                    content={'Click to add todo'}
                />

            </div>
        );
    }
}

export default AddToDo;