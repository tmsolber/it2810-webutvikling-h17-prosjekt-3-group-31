import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import ToDoPage from "../components/ToDoPage";
import MenuComponent from "./MenuContainer";
import HomePage from "./HomePage";
import DocumentationPage from "../components/Documentation";
import CalendarComponent from "../components/CalendarComponent";

class App extends Component {
  render() {
    return (
        <div>
            <MenuComponent/>
            <Switch>
                <Route exact path='/home' component={HomePage}/>
                <Route exact path='/todo' component={ToDoPage}/>
                <Route exact path='/calendar' component={CalendarComponent}/>
                <Route exact path='/documentation' component={DocumentationPage}/>
            </Switch>
        </div>
    );
  }
}

export default App;
