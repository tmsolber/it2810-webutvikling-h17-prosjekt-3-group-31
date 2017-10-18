import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import ToDoPage from "../components/ToDoPage";
import MenuComponent from "./MenuContainer";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
        <div>
            <MenuComponent/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/todo' component={ToDoPage}/>
            </Switch>
        </div>
    );
  }
}

export default App;
