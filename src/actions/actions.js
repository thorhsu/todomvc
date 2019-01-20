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
    }
  };
}
export { mapDispatchToProps, mapStateToProps };