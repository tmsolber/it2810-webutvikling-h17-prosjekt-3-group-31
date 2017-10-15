import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class MainPage extends Component{
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item name='todo' active={activeItem === 'todo'} onClick={this.handleItemClick} />
                    <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick} />
                </Menu>
            </div>
        )
    };
}

export default MainPage;