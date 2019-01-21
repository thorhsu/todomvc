import React, { Component } from 'react';
import './App.css';
import './assets/css/index.css';
import './assets/css/base.css';
import  Header from './ccomponents/Header';
import  TodoList from './ccomponents/TodoList';
import  Filter from './ccomponents/Filter';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './actions/actions';


class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        {/* This section should be hidden by default and shown when there are todos */}
        <section className="main">
          { 
            this.props.todos.length > 0?
               <input className="toggle-all" type="checkbox" onChange={this.props.toggleAll}/> : ''
          }
          <label htmlFor="toggle-all" >Mark all as complete</label>
          <TodoList />
        </section>
        { /* This footer should hidden by default and shown when there are todos */}
        { 
          this.props.todos.length > 0?
            <footer className="footer">
              { /*This should be `0 items left` by default */}
              <span className="todo-count"><strong>{this.props.todos.filter(todo => !todo.isCompleted).length}</strong> item left</span>
              { /*Remove this if you don't implement routing*/}
              <Filter />
              {/* Hidden if no completed items are left */}
              <button className="clear-completed" onClick={this.props.removeAllCompleted}>Clear completed</button>
            </footer>
            :
            ''
        }
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
