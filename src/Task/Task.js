import React, { Component } from 'react';
import Button from '../Button/Button';
import './Task.css';

class Task extends Component{

    state = {
        editing:false
    }

    edit = () => {
        this.setState({editing:true});
    }

    save = () => {
        const text = this.refs.newDescription.value;
        this.props.updateTaskDescription(text,this.props.index);
        this.setState({editing:false})
    }

    cancel = () => {
        this.setState({editing:false})
    }

    delete = () => {
        this.props.removeTaskFromList(this.props.index);
    }

    renderNormalTask = () => {
        return(
            <div className="task">
                <div className="taskDescription">{this.props.children}</div>
                <Button type="edit" name="Edit" editTask={this.edit}/>
                <Button type="delete" name="Delete" deleteTask={this.delete}/>
            </div> 
         );
    }

    renderEditingTask = () => {
        return(
            <div className="task">
                <input type="text" ref="newDescription" defaultValue={this.props.children}/>
                <Button type="save" name="Save" saveTask={this.save}/>
                <Button type="cancel" name="Cancel" cancelTask={this.cancel}/>
            </div> 
         );
    }

    render = () => {
        if(this.state.editing){
            return this.renderEditingTask();
        }else{
            return this.renderNormalTask();
        }
    }
}

export default Task;