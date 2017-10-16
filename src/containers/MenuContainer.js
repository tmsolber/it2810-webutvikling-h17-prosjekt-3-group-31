import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MenuComponent extends Component{
    state = { activeItem: 'Home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu pointing secondary>
                    <Link to={'/'}>
                        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                    </Link>
                    <Link to={'/todo'}>
                        <Menu.Item name='ToDo' active={activeItem === 'ToDo'} onClick={this.handleItemClick} />
                    </Link>
                    <Link to={'/calender'}>
                        <Menu.Item name='Calendar' active={activeItem === 'Calendar'} onClick={this.handleItemClick} />
                    </Link>
                </Menu>
            </div>
        )
    };
}

export default MenuComponent;