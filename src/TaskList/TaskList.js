import React, { Component } from 'react';
import Task from '../Task/Task'
import Button from '../Button/Button'
import './TaskList.css';

class TaskList extends Component{

    state = {
        taskNames:[],
        taskName:''
    }

    removeTask = (i) => {
        let arr = this.state.taskNames;
        arr.splice(i,1);
        this.setState({taskNames:arr})
    }

    updateTask = (newDescription,i) => {
        let arr = this.state.taskNames;
        arr[i] = newDescription;
        this.setState({taskNames:arr})
    }

    handleChange = (event) => {
        this.setState({taskName:event.target.value});
    }

    handleSubmit = () => {
        if(this.state.taskName.length==0){
            return;
        }
        this.setState({taskNames:this.state.taskNames.concat(this.state.taskName),taskName:''});
    }

    render(){
        return(
            <main>
                <div className="taskList">
                    <p>Tasks:{this.state.taskNames.length}</p>
                    {
                        this.state.taskNames.map((taskName,i) =>
                        {
                            return (
                            <Task key={i} index={i} updateTaskDescription={this.updateTask} removeTaskFromList={this.removeTask}>{taskName}</Task>
                            );
                        })
                    }
                </div>
                <p>Add new task here:</p>
                <div className="newTask">
                    <input type="text" onChange={this.handleChange} value={this.state.taskName}/>
                    <Button type="handleSubmit" name="Add task" handleSubmitTask={this.handleSubmit}/>
                </div>
            </main>
        );
    }
}

export default TaskList;