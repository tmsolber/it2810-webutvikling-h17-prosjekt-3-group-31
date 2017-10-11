/*jshint esversion: 6 */
import React, { Component } from 'react';
import ModalPage from './ModalPage.js';
import './App.css';
import Documentation from './Documentation.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            scalingPlus: 'scale(1)',
            scalingInfo: 'scale(1)',
            value: (localStorage.getItem('todo') && JSON.parse(localStorage.getItem('todo')))||[],
            time: new Date(),
            showDoc: false
        };
    }

    componentDidMount = () => {
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    };

    componentWillMount = () => {
        clearInterval(this.update)
    };

    handleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
        }));
    };

    handleDocumentation = () => {
        this.setState(prevState => ({
            showDoc: !prevState.showDoc,
        }));
    };

    handleHover = () => {
        this.setState({
            scalingPlus: 'scale(1.1)'
        });
    };

    handleLeave = () => {
        this.setState({
            scalingPlus: 'scale(1)'
        })
    };

    handleHoverInfo = () => {
        this.setState({
            scalingInfo: 'scale(1.1)'
        });
    };

    handleLeaveInfo = () => {
        this.setState({
            scalingInfo: 'scale(1)'
        })
    };



    onUpdate = (val) => {
        this.state.value.push(val);
        this.setState({
            value: this.state.value
        });
    };

    render() {
        const {time} = this.state;
        const imgStyle = {
            width: 30,
            height: 30,
            cursor: 'pointer',
            marginLeft: 15,
            marginTop: 15,
            transform: this.state.scalingPlus
        };

        const infoStyle = {
            width: 30,
            height: 30,
            top: 0,
            right: 0,
            cursor: 'pointer',
            position: 'absolute',
            marginTop: -35,
            marginRight: 10,
            transform: this.state.scalingInfo
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
                    <img src={require('./pluss.png')} alt="pluss-btn" onClick={this.handleModal} onMouseOver={this.handleHover}
                        onMouseLeave={this.handleLeave} style={imgStyle}/>
                    <div className="clock">
                        <h2>
                            {time.toLocaleTimeString()}
                        </h2>
                    </div>
                    <div className="info-button">
                        <img src={require('./infobtn.png')} alt="info-btn" onClick={this.handleDocumentation} onMouseOver={this.handleHoverInfo}
                             onMouseLeave={this.handleLeaveInfo} style={infoStyle}/>
                    </div>
                    <ModalPage show={this.state.showModal} onClose={this.handleModal} onUpdate={this.onUpdate} values={this.state.value}/>
                    <Documentation showD={this.state.showDoc} onClose={this.handleDocumentation}/>
                </div>
            </div>
        );
    }
}

export default App;
