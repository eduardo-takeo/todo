import { combineReducers, createStore } from "redux";
import todoListReducer from "./ducks/todoList";

const rootReducer = combineReducers({
  todoList: todoListReducer,
});

const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
