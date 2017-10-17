import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../css/MenuContainer.css';

class MenuComponent extends Component{
    // Saves the state of which tab was clicked last, so that it stays that way on page refresh.
    state = { activeItem: localStorage.getItem('activeTab')};

    // Function that toggles between the active states and saves the active state in local storage
    handleItemClick = (e, { name }) => this.setState({ activeItem: name }) & localStorage.setItem('activeTab', name);

    render() {
        const { activeItem } = this.state;
        return (
            <div>
                {/* Semantic UI navbar */}
                <Menu id="navbar" pointing secondary>
                    <Menu.Item as={Link} to={'/home'} style={{color: 'white'}} name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                    <Menu.Item as={Link} to={'/todo'} style={{color: 'white'}} name='ToDo' active={activeItem === 'ToDo'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} to={'/documentation'} style={{color: 'white'}} name='Documentation'
                                   active={activeItem === 'Documentation'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    };
}

export default MenuComponent;