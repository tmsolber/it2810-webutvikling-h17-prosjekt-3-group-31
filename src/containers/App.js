import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import ToDoPage from "../components/ToDoPage";
import MenuComponent from "./MenuContainer";
import HomePage from "./HomePage";
//import DocumentationPage from "../components/DocumentationBtn";
import CalendarComponent from "../components/CalendarComponent";

class App extends Component {
  render() {
    return (
        <div>
            <MenuComponent/>
            <Switch>gi
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/todo' component={ToDoPage}/>
                <Route exact path='/calendar' component={CalendarComponent}/>
            </Switch>
        </div>
    );
  }
}

export default App;
