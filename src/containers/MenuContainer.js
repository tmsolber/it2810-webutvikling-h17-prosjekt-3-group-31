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
                <Menu pointing secondary style={{borderColor: 'white'}}>
                    <Link to={'/'}>
                        <Menu.Item style={{color: 'white'}} name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                    </Link>
                    <Link to={'/todo'}>
                        <Menu.Item style={{color: 'white'}} name='ToDo' active={activeItem === 'ToDo'} onClick={this.handleItemClick} />
                    </Link>
                    <Link to={'/calender'}>
                        <Menu.Item style={{color: 'white'}} name='Calendar' active={activeItem === 'Calendar'} onClick={this.handleItemClick} />
                    </Link>
                </Menu>
            </div>
        )
    };
}

export default MenuComponent;