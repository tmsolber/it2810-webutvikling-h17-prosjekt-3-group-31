import React, {Component} from 'react';

class HeaderTextComponent extends Component {
    render() {
        return <h1 className="header">{this.props.text}</h1>;
    }
}

export default HeaderTextComponent;
