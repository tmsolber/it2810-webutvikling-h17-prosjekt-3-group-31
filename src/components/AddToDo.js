import React, {Component} from 'react';
import plus from '../images/plus.png';
import '../CSS/Buttons.css';

class AddToDo extends Component{
    render() {
        return (
            <div className="add-btn">
                <img src={plus} alt="add-to-do" className="plus" onClick={this.props.show}/>
            </div>
        );
    }
}

export default AddToDo;