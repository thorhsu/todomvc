

const initialState = {
  title: 'TodoMVC',
  placeholder: 'What needs to be done?',
  todos: [],
  newTodoStr: '',
};

export default (state = initialState, action) => {
  // clone state first, avoid mutate original state
  const cloneState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'NEW_TODO':
      cloneState.todos.push({
        id: cloneState.todos.length,
        isCompleted: false,
        todoNm:action.newTodo}
      );
      cloneState.newTodoStr = '';
      return cloneState;
    case 'CHANGE_NEW_TODO':
      cloneState.newTodoStr = action.newTodo;
      return cloneState;
    case 'TOGGLE_COMPLETED':
      action.todo.isCompleted = !action.todo.isCompleted;
      cloneState.todos = cloneState.todos.map(todo => {
        return (action.todo.id !== todo.id)? todo : action.todo; 
      }); 
      return cloneState;
    case 'DELETE_TODO':
      cloneState.todos = cloneState.todos.filter(todo => action.todo.id !== todo.id);
      return cloneState;
    case 'TOGGLE_ALL':
      cloneState.todos = state.todos.map(todo => ({...todo, isCompleted: action.isCompleted}));
      return cloneState;
    default:
      return state;
  }
};
