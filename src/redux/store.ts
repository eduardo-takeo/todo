import { createStore } from "redux";

const initialState = {
  todoList: [],
};

const rootReducer = (state: object = initialState, action: object) => {
  return state;
};

const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
