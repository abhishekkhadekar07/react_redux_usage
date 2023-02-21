import styles from "../styles/Home.module.css";
import Counter from "./features/counter/counter";
import PostsList from "./features/counter/post/postsList";
import AddPostForm from "./features/counter/post/addPostForm";
export default function Home() {
  return (
    <div className={styles.container}>
      <Counter />
      <AddPostForm />
      <PostsList />
    </div>
  );
}
