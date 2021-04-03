// CONSTANTS
const ADD_TASK = "ADD_TASK";

// INTERFACES
interface TodoItem {
  id: number;
  task: string;
  status: string;
}

// ACTIONS
export const addItem = (payload: TodoItem) => {
  return { type: ADD_TASK, payload };
};

// REDUCERS
const todoListReducer = (state: object = {}, action: object) => {
  // TODO: Implement
  // switch (action.type) {
  //   case ADD_TASK:
  //       return {...state, todoList: {...state.todoList, action.payload}}
  //   default:
  //     return state;
  // }
  return state;
};

export default todoListReducer;
