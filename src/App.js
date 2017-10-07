/*jshint esversion: 6 */
import React, { Component } from 'react';
import ModalPage from './ModalPage.js';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            scaling: 'scale(1)',
            value: []
        };
    }

    handleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
        }));
    };

    handleHover = () => {
        this.setState({
            scaling: 'scale(1.1)'
        });
    };

    handleLeave = () => {
        this.setState({
            scaling: 'scale(1)'
        })
    };

    onUpdate = (val) => {
        this.state.value.push(val)
    };

    render() {
        const imgStyle = {
            width: 30,
            height: 30,
            cursor: 'pointer',
            marginLeft: 15,
            marginTop: 15,
            transform: this.state.scaling
        };
        
        const listItems = this.state.value.map((v) =>
            <div>{v}</div>
        );

        return (
            <div className="background-image">
                <div className="ToDos" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',  backgroundColor: '#fff'}}>
                    {listItems}
                </div>
                <div className="App">
                    <img src={require('./pluss.png')} onClick={this.handleModal} onMouseOver={this.handleHover}
                        onMouseLeave={this.handleLeave} style={imgStyle}/>
                    <ModalPage show={this.state.showModal} onClose={this.handleModal} onUpdate={this.onUpdate}/>
                </div>
            </div>
        );
    }
}

export default App;
