import React, { Component } from 'react';
import Task from '../Task/Task'
import Button from '../Button/Button'
import './TaskList.css';

class TaskList extends Component{

    state = {
        descriptions:[],
        text:''
    }

    removeTask = (i) => {
        let arr = this.state.descriptions;
        arr.splice(i,1);
        this.setState({descriptions:arr})
    }

    updateTask = (newDescription,i) => {
        let arr = this.state.descriptions;
        arr[i] = newDescription;
        this.setState({descriptions:arr})
    }

    handleChange = (event) => {
        this.setState({text:event.target.value});
    }

    handleSubmit = () => {
        if(this.state.text.length==0){
            return
        }
        this.setState({descriptions:this.state.descriptions.concat(this.state.text),text:''});
    }

    render(){
        return(
            <main>
                <div className="taskList">
                    <p>Tasks:{this.state.descriptions.length}</p>
                    {
                        this.state.descriptions.map((text,i) =>
                        {
                            return (
                            <Task key={i} index={i} updateTaskDescription={this.updateTask} removeTaskFromList={this.removeTask}>{text}</Task>
                            );
                        })
                    }
                </div>
                <p>Add new task here:</p>
                <div className="newTask">
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                    <Button type="handleSubmit" name="Add task" handleSubmitTask={this.handleSubmit}/>
                </div>
            </main>
        );
    }
}

export default TaskList;