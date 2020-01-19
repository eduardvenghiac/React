import React, { Component } from 'react';

class Task extends Component{

    state = {
        editing:false
    }

    edit = () => {
        this.setState({editing:true});
    }

    save = () => {
        this.setState({editing:false})
    }

    cancel = () => {
        this.setState({editing:false})
    }

    renderNormalTask = () => {
        return(
            <div className="task">
                <div className="taskDescription">{this.props.children}</div>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.delete}>Delete</button>
            </div> 
         );
    }

    renderEditingTask = () => {
        return(
            <div className="task">
                <input type="text" defaultValue={this.props.children}/>
                <button onClick={this.save}>Save</button>
                <button onClick={this.cancel}>Cancel</button>
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