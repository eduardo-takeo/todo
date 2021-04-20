// CONSTANTS
const FETCH_TASKS = "FETCH_TASKS";
const ERROR = "ERROR";

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
export const fetchTasks = () => {
  return (dispatch: any) => {
    return fetch("http://localhost:3001/api/todos")
      .then((response) => response.json())
      .then((json) => dispatch({ type: FETCH_TASKS, payload: json }))
      .catch((err) =>
        dispatch({ type: ERROR, payload: "Unable to fetch data" })
      );
  };
};

// REDUCERS
const todoListReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default todoListReducer;
