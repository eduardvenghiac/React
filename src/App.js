import React, { Component } from 'react';
import Task from './Task/Task'
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Task >Task 1</Task>
      </div>
    );
  }
}

export default App;
