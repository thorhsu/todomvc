import { connect } from 'react-redux';
import React, { Component } from 'react';
import { mapStateToProps, mapDispatchToProps } from '../actions/actions';

export default connect(mapStateToProps, mapDispatchToProps)(({todos, filterCondition, toggleCompleted, deleteTodo, goEditing, changeTodoNm, backToView}) => {
    let filteredTodos = todos;
    // eslint-disable-next-line default-case
    switch(filterCondition){
        case 'all':
           break;
        case 'completed':
           filteredTodos = todos.filter(todo => todo.isCompleted);
           break;
        case 'active':
           filteredTodos = todos.filter(todo => !todo.isCompleted);
           break;
    }
    return (
        <ul className="todo-list">
            { /* These are here just to show the structure of the list items */}
            { /* List items should get the class `editing` when editing and `completed` when marked as completed */}
            {
                filteredTodos.map((todo, idx) => {
                    return (<li key={`li_${idx}`} className={(todo.isCompleted? 'completed ' : ' ') + (todo.isEditing? 'editing ' : ' ')}>
                        <div className="view">
                          <input className="toggle" type="checkbox" checked={todo.isCompleted} onChange={(e) => toggleCompleted(todo)}/>
                          <label onDoubleClick={(e) => goEditing(todo)} >{todo.todoNm}</label>
                          <button className="destroy" onClick={(e) => deleteTodo(todo)}></button>
                        </div>
                        <input  ref={input => input && input.focus()} className="edit" value={todo.todoNm} 
                            onChange={(e) => changeTodoNm(e, todo)} 
                            onBlur={(e) => backToView(e, todo, false)} 
                            onKeyUp={(e) => backToView(e, todo, true)} />
                      </li>);
                })
            }
          </ul>
    );
});
