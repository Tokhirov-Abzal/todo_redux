const initialState = {
  todos: [
    { id: 1, name: "clean", completed: false },
    { id: 2, name: "work", completed: true },
    { id: 3, name: "wash", completed: false },
  ],
};

function addTodo(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: true } : todo
        ),
      };
    default:
      return state;
  }
}

console.log(initialState.todos);

export default addTodo;
