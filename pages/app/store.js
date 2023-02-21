import { configureStore } from "@reduxjs/toolkit";
import counterrReducer from "../features/counter/counterSlice";
import postsReducer from "../features/counter/post/postsSlice";
export const store = configureStore({
  reducer: {
    counter: counterrReducer,
    posts: postsReducer,
  },
});
