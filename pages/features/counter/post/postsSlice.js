import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "watch marvel",
    content: "it has ironman hulk and captain America ",
  },
  {
    id: "2",
    title: "watch dc",
    content: "it has superman flash and arrow ",
  },
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    }
  }
})

//   reducers: {
//     postAdded(state, action) {
//       state.push(action.payload);
//     },
//   },
// });
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
