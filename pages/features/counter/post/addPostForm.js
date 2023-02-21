import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../../users/usersSlice";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers);
  const Dispatch = useDispatch();
  const onSavePostClicked = () => {
    if (title && content) {
      Dispatch(
        // {}
        postAdded(title, content, userId)
      );

      setTitle("");
      setContent("");
    }
  };
  const cansave = Boolean(title) && Boolean(content) && Boolean(userId);
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <div>
      <section>
        <h2>ADD a new posts</h2>
        <form>
          <label htmlFor="postTitle">post Title</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="postTitle">AUTHOR :</label>
          <select
            id="postAuthor"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value=""></option>
            {usersOptions}
          </select>
          <label htmlFor="postTitle">postContent</label>
          <input
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="button" onClick={onSavePostClicked} disabled={!cansave}>
            save post
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddPostForm;
