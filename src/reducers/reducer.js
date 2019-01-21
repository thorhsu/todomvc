

const initialState = {
  title: 'TodoMVC',
  placeholder: 'What needs to be done?',
  todos: [],
  filterCondition: 'all',
  newTodoStr: ''
};

export default (state = initialState, action) => {
  // clone state first, avoid mutate original state
  const cloneState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'NEW_TODO':
      cloneState.todos.push({
        id: cloneState.todos.length,
        isCompleted: false,
        isEditing: false,
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
    case 'REMOVE_ALL_COMPLETED':
      cloneState.todos = state.todos.filter(todo => !todo.isCompleted);
      return cloneState;
    case 'GO_EDITING':
      cloneState.todos = state.todos.map(todo => action.todo.id === todo.id? {...todo, isEditing: true} : todo);
      return cloneState;
    case 'CHANGE_TODO_NM':
      cloneState.todos = state.todos.map(todo => action.todo.id === todo.id? action.todo : todo);
      return cloneState;
    case 'BACK_TO_VIEW':
      cloneState.todos = state.todos.map(todo => action.todo.id === todo.id? action.todo : todo);
      return cloneState;
    case 'CHANGE_FILTER':
      cloneState.filterCondition = action.filterCondition;
      return cloneState;      



    default:
      return state;
  }
};
