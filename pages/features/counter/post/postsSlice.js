import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "data-fns";
const initialState = [
  {
    id: "1",
    title: "watch marvel",
    content: "it has ironman hulk and captain America ",
    data: sub(new Date(), { minute: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "watch dc",
    content: "it has superman flash and arrow ",
    data: sub(new Date(), { minute: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

//   reducers: {
//     postAdded(state, action) {
//       state.push(action.payload);
//     },
//   },
// });
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
