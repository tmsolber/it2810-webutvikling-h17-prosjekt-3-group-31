/*jshint esversion: 6 */
import React, { Component } from 'react';
import ModalPage from './components/ModalPage.js';
import {Segment, Checkbox, Grid, Icon} from 'semantic-ui-react'
import './App.css';
import Documentation from './components/Documentation.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            scalingPlus: 'scale(1)',
            scalingInfo: 'scale(1)',
            scalingRemove: 'scale(1)',
            value: (localStorage.getItem('todo') && JSON.parse(localStorage.getItem('todo')))||[],
            time: new Date(),
            check: false,
            showDoc: false
        };
    }

    componentDidMount = () => {
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
        document.body.style.backgroundImage = "url(https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
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

    handleHoverRemove = () => {
        this.setState({
            scalingRemove: 'scale(1.1)'
        });
    }

    handleLeaveRemove = () => {
        this.setState({
            scalingRemove: 'scale(1)'
        })
    };

    onUpdate = (val) => {
        this.state.value.push({
            text: val,
            key: Date.now()
        });
        this.setState({
            value: this.state.value
        });
        console.log(this.state.value)
    };

    handleDelete = (key) => {
        const todos = this.state.value.filter(function(val){
            return (val.key !== key);
        });

        this.setState({
            value: todos
        });
    };

    handleCheck = () => {
        if(this.state.check === false){
            this.setState({
                check: true
            });
        }else{
            this.setState({
                check: false
            });
        }
    };

    render() {
        const {time} = this.state;

        const imgStyle = {
            transform: this.state.scalingPlus
        };

        const infoStyle = {
            transform: this.state.scalingInfo
        };

        const removeStyle = {
            transform: this.state.scalingRemove
        }

        const className = this.state.check ? 'todoTextTrue' : 'todoTextFalse';

        const listItems = this.state.value.map((v) =>
            <Segment className={'TodoItem'} key={v.key}>
                <Grid columns={'equal'}>
                    <Grid.Column width={1}>
                        <Checkbox className={'checkbox'} onClick={(e)=>this.handleCheck()}/>
                    </Grid.Column>
                    <Grid.Column stretched className={className} name={'todoText'}>
                        {v.text}
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Icon name='remove' className={'remove'} color={'red'} size={'large'} onMouseOver={this.handleHoverRemove}
                              onMouseLeave={this.handleLeaveRemove} style={removeStyle} onClick={(e) => this.handleDelete(v.key)}/>
                    </Grid.Column>
                </Grid>
            </Segment>
        );

        return (
            <div>
                <img src={require('./components/pluss.png')} alt="ocean" className={'plus'} onClick={this.handleModal}
                     onMouseOver={this.handleHover} onMouseLeave={this.handleLeave} style={imgStyle}/>
                <img src={require('./components/infobtn.png')} alt="info-btn" className={'info'} onClick={this.handleDocumentation} onMouseOver={this.handleHoverInfo}
                     onMouseLeave={this.handleLeaveInfo} style={infoStyle}/>
                <Grid className="App">
                    <Grid.Column width={5} textAlign='centered'>
                        <Grid.Row>
                            <div className="clock" >
                                <h2>
                                    {/* print the string prettily */}
                                    {time.toLocaleTimeString()}
                                </h2>
                            </div>
                        </Grid.Row>
                        <Grid.Row>
                            <h1 className={'header'}>Todo</h1>
                        </Grid.Row>
                        <Grid.Row>
                            <Segment.Group className="ToDos" >
                            {listItems}
                            </Segment.Group>
                            <ModalPage show={this.state.showModal} onClose={this.handleModal} onUpdate={this.onUpdate} values={this.state.value}/>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>

                <Documentation showD={this.state.showDoc} onClose={this.handleDocumentation}/>
            </div>
        );
    }
}

export default App;
