export const TodoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      case 'TOGGLE_TODO':
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        );
      case 'REMOVE_TODO':
        return state.filter((todo) => todo.id !== action.payload);
      case 'CLEAR_TODOS':
        return [];
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };
  
  