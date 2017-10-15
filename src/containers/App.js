import React, { Component } from 'react';
import '../CSS/App.css';
import TodoPage from "../components/TodoPage";
import MainPage from "../components/MainPage";
import DocumentationPage from "../components/DocumentationBtn";
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
         <MainPage />
    );
  }
}

export default App;
