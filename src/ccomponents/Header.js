import { connect } from 'react-redux';
import React, { Component } from 'react';
import { mapStateToProps, mapDispatchToProps } from '../actions/actions';

export default connect(mapStateToProps, mapDispatchToProps)(({title, placeholder, newTodoStr, newTodo, changeNewTodo}) => {
    return (
        <header className="header" >
            <h1>{title}</h1>
            <input className="new-todo" placeholder={ placeholder } value={newTodoStr} autoFocus onChange={changeNewTodo} onKeyUp={newTodo} />
        </header>
    );
});
