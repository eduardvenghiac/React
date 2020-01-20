import React from 'react';

const Button = (props) => {
    if(props.type==="edit")
    {
        return (
            <div className="button">
                <button onClick={props.editTask}>{props.name}</button>
            </div>
        );
    }
    else if(props.type==="delete"){
        return (
            <div className="button">
                <button onClick={props.deleteTask}>{props.name}</button>
            </div>
        );
    }
    else if(props.type==="save"){
        return (
            <div className="button">
                <button onClick={props.saveTask}>{props.name}</button>
            </div>
        );
    }
    else if(props.type==="cancel"){
        return (
            <div className="button">
                <button onClick={props.cancelTask}>{props.name}</button>
            </div>
        );
    }
    else if(props.type==="handleSubmit"){
        return (
            <div className="button">
                <button onClick={props.handleSubmitTask}>{props.name}</button>
            </div>
        );
    }

}

export default Button;