import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../css/MenuContainer.css';

class MenuComponent extends Component{
    state = { activeItem: localStorage.getItem('activeTab')};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name }) & localStorage.setItem('activeTab', name);

    render() {
        const { activeItem } = this.state;
        return (
            <div>
                <Menu id="navbar" pointing secondary>
                    <Menu.Item as={Link} to={'/'} style={{color: 'white'}} name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                    <Menu.Item as={Link} to={'/todo'} style={{color: 'white'}} name='ToDo' active={activeItem === 'ToDo'} onClick={this.handleItemClick} />
                    <Menu.Item as={Link} to={'/calendar'} style={{color: 'white'}} name='Calendar' active={activeItem === 'Calendar'} onClick={this.handleItemClick} />
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