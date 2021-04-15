// CONSTANTS
const SET_TASKS = "SET_TASKS";

const initialState = {
  todoList: [],
};

// INTERFACES
interface State {
  todoList: TodoItem[];
}

interface Action {
  type: string;
  payload: object;
}

interface TodoItem {
  _id: string;
  task: string;
  status: string;
}

// ACTIONS
export const setTasks = (payload: TodoItem[]) => {
  return { type: SET_TASKS, payload };
};

// REDUCERS
const todoListReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, todoList: [...state.todoList, action.payload] };
    default:
      return state;
  }
};

export default todoListReducer;
