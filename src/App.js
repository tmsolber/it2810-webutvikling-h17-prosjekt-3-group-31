/*jshint esversion: 6 */
import React, { Component } from 'react';
import ModalPage from './ModalPage.js';
import {Segment, Checkbox, Grid, Icon} from 'semantic-ui-react'
import './App.css';

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
        this.state.value.push({
            text: val,
            key: Date.now()
        });
        this.setState({
            value: this.state.value
        });
        console.log(this.state.value)
    };

    // handleDelete = (item) => {
    //     var todos = this.state.value.filter(function(candidate){
    //         return (candidate !== item);
    //     });
    //
    //     this.setState({
    //         value: todos
    //     });
    // };

    render() {
        const {time} = this.state;

        const imgStyle = {
            transform: this.state.scaling
        };

        const listItems = this.state.value.map((v) =>
            <Segment className={'TodoItem'} key={v.key}>
                <Grid columns={'equal'}>
                    <Grid.Column width={1}>
                        <Checkbox className={'checkbox'}/>
                    </Grid.Column>
                    <Grid.Column stretched>
                        {v.text}
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Icon name='remove' className={'remove'} color={'red'} size={'large'} onMouseOver={this.handleHover}
                              onMouseLeave={this.handleLeave} style={imgStyle}/>
                    </Grid.Column>
                </Grid>
            </Segment>
        );

        return (
            <div>
                <img src={require('./pluss.png')} alt="ocean" className={'plus'} onClick={this.handleModal}
                     onMouseOver={this.handleHover} onMouseLeave={this.handleLeave} style={imgStyle}/>
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
                            <Segment.Group className="ToDos" >
                            {listItems}
                            </Segment.Group>
                            <ModalPage show={this.state.showModal} onClose={this.handleModal} onUpdate={this.onUpdate} values={this.state.value}/>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default App;
