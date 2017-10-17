import React, {Component} from 'react';
import ToDoForm from './ToDoForm';
import AddToDo from "./AddToDo";
import '../css/ToDoPage.css';
import {Segment, Checkbox, Grid, Icon} from 'semantic-ui-react'
import BackgroundImage from "../containers/BackgroundImage";
import update from 'immutability-helper';

class ToDoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            value: (localStorage.getItem('notes') && JSON.parse(localStorage.getItem('notes')))||[],
            check: false
        };
        this.handleModal = this.handleModal.bind(this);
        this.handleInputFromToDo = this.handleInputFromToDo.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleModal() {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    }

    handleInputFromToDo(val){
        this.state.value.push({
            text: val,
            key: Date.now(),
            cName: 'todoTextFalse',
            checked: null
        });
        this.setState({
            value: this.state.value
        });
    }

    // Delete the todoitem given by the key, and save the new value of the list.
    handleDelete(key){
        const todos = this.state.value.filter(function(val){
            return (val.key !== key);
        });

        this.setState({
            value: todos
        });
    }

    componentDidUpdate(){
        localStorage.setItem('notes', JSON.stringify(this.state.value));
    }

    handleCheck(key){
        const value = this.state.value;
        const index = value.findIndex(function(c){
            return c.key === key;
        });

        const updatedClass = (value[index].cName ==='todoTextFalse')
            ? update(value[index], {cName: {$set: 'todoTextTrue'}})
            : update(value[index], {cName: {$set: 'todoTextFalse'}});

        const newValue = update(value, {
            $splice: [[index, 1, updatedClass]]
        });

        this.setState({
            value: newValue
        });
    }

    render() {


        const listItems = this.state.value.map((v) =>
            <Segment className="TodoItem" key={v.key}>
                <Grid columns={"equal"}>
                    <Grid.Column width={1}>
                        <Checkbox checked={(v.cName==='todoTextTrue')} onClick={(e)=>this.handleCheck(v.key)}/>
                    </Grid.Column>
                    <Grid.Column width={13} stretched className={v.cName} >
                        {v.text}
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Icon id="remove-icon" name="remove" onClick={(e) => this.handleDelete(v.key)}/>
                    </Grid.Column>
                </Grid>
            </Segment>
        );

        return (
            <div>
                <BackgroundImage/>
                <div className="btn-container">
                    <AddToDo show={this.handleModal}/>
                </div>
                <Grid className="App">
                    <Grid.Column width={5} textAlign="centered">
                        <Grid.Row>
                            <div className="todo-segment">
                                <Segment.Group>
                                    {listItems}
                                </Segment.Group>
                            </div>
                            <ToDoForm show={this.state.showModal} onClose={this.handleModal}
                                      onUpdate={this.handleInputFromToDo} values={this.state.value}/>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        );

    }
}

export default ToDoPage;