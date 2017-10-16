import React, {Component} from 'react';
import ToDoForm from './ToDoForm';
import AddToDo from "./AddToDo";
import '../CSS/ToDoPage.css';
import {Segment, Checkbox, Grid, Icon} from 'semantic-ui-react'
import DocumentationBtn from "./DocumentationBtn";
import BackgroundImage from "../containers/BackgroundImage";
import HeaderTextComponent from "./HeaderTextComponent";

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
            key: Date.now()
        });
        this.setState({
            value: this.state.value
        });
        console.log(this.state.value)
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

    handleCheck(){
        if(this.state.check === false){
            this.setState({
                check: true
            });
        }else{
            this.setState({
                check: false
            });
        }
    }

    render() {
        const className = this.state.check ? "todoTextTrue" : "todoTextFalse";
        const listItems = this.state.value.map((v) =>
            <Segment className="TodoItem" key={v.key}>
                <Grid columns={"equal"}>
                    <Grid.Column width={1}>
                        <Checkbox className="checkbox" onClick={(e)=>this.handleCheck()}/>
                    </Grid.Column>
                    <Grid.Column stretched className={className} name={"todoText"} >
                        {v.text}
                    </Grid.Column>
                    <Grid.Column width={2}>
                        {/* Cannot customize semantic ui, so have to put style in here*/}
                        <Icon name="remove" color={"red"} size={"large"} style={{cursor: 'pointer'}}
                              onClick={(e) => this.handleDelete(v.key)}/>
                    </Grid.Column>
                </Grid>
            </Segment>
        );

        return (
            <div>
                <BackgroundImage/>
                <div className="btn-container">
                    <AddToDo show={this.handleModal}/>
                    <DocumentationBtn/>
                </div>
                <Grid className="App">
                    <Grid.Column width={5} textAlign="centered">
                        <Grid.Row>
                            <HeaderTextComponent text={"ToDo"}/>
                        </Grid.Row>
                        <Grid.Row>
                            <Segment.Group>
                                {listItems}
                            </Segment.Group>
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