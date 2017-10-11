/*jshint esversion: 6 */
import React, { Component } from 'react';
import ModalPage from './ModalPage.js';
import {Segment, Checkbox, Grid, Icon, Button} from 'semantic-ui-react'
import './App.css';
import BodyImages from 'react-body-images';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            scaling: 'scale(1)',
            value: (localStorage.getItem('todo') && JSON.parse(localStorage.getItem('todo')))||[],
            time: new Date()
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
        this.state.value.push(val);
        this.setState({
            value: this.state.value
        });
    };

    render() {
        const {time} = this.state;

        const imgStyle = {
            transform: this.state.scaling
        };

        const image = ['./background2.jpeg'];

        const listItems = this.state.value.map((v) =>
            <Segment className={'TodoItem'}>
                <Grid>
                    <Grid.Column>
                        <Checkbox className={'checkbox'}/>
                    </Grid.Column>
                    <Grid.Column stretched>
                        <li>{v}</li>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='remove' color={'red'} size={'large'}/>
                    </Grid.Column>
                </Grid>
            </Segment>
        );

        return (
            <BodyImages className={"background-image"} bgImageArray={this.state.images}>
                <div>
                    <img src={require('./pluss.png')} alt="ocean" className={'plus'} onClick={this.handleModal} onMouseOver={this.handleHover}
                         onMouseLeave={this.handleLeave} style={imgStyle}/>
                    <Grid className="App" divided>
                        <Grid.Column width={5} textAlign={'centered'} verticalAlign={'middle'}>
                            <Grid.Row centered>
                                <div className="clock" >
                                    <h2>
                                        {/* print the string prettily */}
                                        {time.toLocaleTimeString()}
                                    </h2>
                                </div>
                            </Grid.Row>
                            <Grid.Row>
                                <Segment.Group className="ToDos" >
                                {listItems}
                                </Segment.Group>
                                <ModalPage show={this.state.showModal} onClose={this.handleModal} onUpdate={this.onUpdate} values={this.state.value}/>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </div>
            </BodyImages>
        );
    }
}

export default App;
