import { connect } from 'react-redux';
import React, { Component } from 'react';
import { mapStateToProps, mapDispatchToProps } from '../actions/actions';

export default connect(mapStateToProps, mapDispatchToProps)(({filterCondition, changeFilter}) => {
    return (
        <ul className="filters">
            <li>
                <a className={filterCondition === 'all'? 'selected' : ''} href="#/" onClick={() => changeFilter('all')} >All</a>
            </li>
            <li>
                <a className={filterCondition === 'active'? 'selected' : ''} href="#/active" onClick={() => changeFilter('active')} >Active</a>
            </li>
            <li>
                <a className={filterCondition === 'completed'? 'selected' : ''} href="#/completed" onClick={() => changeFilter('completed')} >Completed</a>
            </li>
        </ul>
    );
});
