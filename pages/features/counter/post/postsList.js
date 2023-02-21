import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import React from "react";

const PostsList = () => {
  // const posts = useSelector(state => state.posts)
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      {/* <h3>{post.id}</h3> */}
      <h3>{post.content.substring(0, 100)}</h3>
    </article>
  ));
  return (
    <div>
      <section>
        <h2>posts</h2>
        {renderedPosts}
      </section>
    </div>
  );
};

export default PostsList;
