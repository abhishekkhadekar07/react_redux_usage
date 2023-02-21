import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const Dispatch = useDispatch();
  const onSavePostClicked = () => {
    if (title && content) {
      Dispatch(
        // {}
        postAdded(title, content)
      );

      setTitle("");
      setContent("");
    }
  };
  return (
    <div>
      <section>
        <h2>ADD a new posts</h2>
        <form>
          <label htmlFor="postTitle">post Title</label>\
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="postTitle">postContent</label>\
          <input
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="button" onClick={onSavePostClicked}>
            save post{" "}
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddPostForm;
