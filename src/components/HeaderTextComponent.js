import React, {Component} from 'react';
import '../css/HeaderTextComponent.css';

class HeaderTextComponent extends Component {
    render() {
        return <h1 className="header">{this.props.text}</h1>;
    }
}

export default HeaderTextComponent;
