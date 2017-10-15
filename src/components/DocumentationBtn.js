import React, {Component} from 'react';
import infoBtn from '../images/infobtn.png';
import '../CSS/Buttons.css';

class DocumentationBtn extends Component{
    render() {
        return (
            <div className="documentation-btn">
                <img src={infoBtn} alt="info-button" className="info"/>
            </div>
        );
    }
}

export default DocumentationBtn;