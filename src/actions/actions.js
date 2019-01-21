function mapStateToProps(state) {
  return state;
}


function mapDispatchToProps(dispatch) {
  return {
    newTodo: (e) => {
      if(e.keyCode === 13){
        dispatch({
          type: 'NEW_TODO',
          newTodo: e.target.value,
        });
      }
    },
    changeNewTodo: (e) =>{
      dispatch({
        type: 'CHANGE_NEW_TODO',
        newTodo: e.target.value,
      });
    },
    toggleCompleted: (todo) => {
      dispatch({
        type: 'TOGGLE_COMPLETED',
        todo: todo,
      });
    },
    toggleAll: (e) => {
      dispatch({
        type: 'TOGGLE_ALL',
        isCompleted: e.target.checked,
      });
    },
    deleteTodo: (todo) => {
      dispatch({
        type: 'DELETE_TODO',
        todo: todo,
      });
    },
    removeAllCompleted: () => {
      dispatch({
        type: 'REMOVE_ALL_COMPLETED',
      });
    },
    goEditing: (todo) => {
      dispatch({
        type: 'GO_EDITING',
        todo: todo,
      });
    },
    changeTodoNm: (event, todo) => {
      todo.todoNm = event.target.value;
      dispatch({
        type: 'CHANGE_TODO_NM',
        todo: todo,
      });
    },
    backToView: (event, todo, enter) => {
      if(!enter || event.keyCode === 13){
        todo.isEditing = false;
        dispatch({
          type: 'BACK_TO_VIEW',
          todo: todo,
        });
      }
    },
    changeFilter: (filterCondition) => {
      dispatch({
        type: 'CHANGE_FILTER',
        filterCondition: filterCondition,
      });
      
    },    
  };
}
export { mapDispatchToProps, mapStateToProps };