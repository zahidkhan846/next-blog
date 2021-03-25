import PostAddIcon from "@material-ui/icons/PostAdd";
import styles from "./AddPost.module.css";

function AddPost() {
  return (
    <div className={styles.createPostContainer}>
      <button className={styles.createPostBtn} onClick={() => {}}>
        <PostAddIcon fontSize="large" color="inherit" />
      </button>
    </div>
  );
}

export default AddPost;
