import { connect } from 'react-redux';
import React, { Component } from 'react';
import { mapStateToProps, mapDispatchToProps } from '../actions/actions';

export default connect(mapStateToProps, mapDispatchToProps)(({todos, toggleCompleted, deleteTodo}) => {
    return (
        <ul className="todo-list">
            { /* These are here just to show the structure of the list items */}
            { /* List items should get the class `editing` when editing and `completed` when marked as completed */}
            {
                todos.map((todo, idx) => {
                    return (<li key={`li_${idx}`} className={todo.isCompleted? 'completed' : ''}>
                        <div className="view">
                          <input className="toggle" type="checkbox" checked={todo.isCompleted} onChange={(e) => toggleCompleted(todo)}/>
                          <label>{todo.todoNm}</label>
                          <button className="destroy" onClick={(e) => deleteTodo(todo)}></button>
                        </div>
                        <input className="edit" defaultValue="Rule the web" />
                      </li>);
                })
            }
          </ul>
    );
});
