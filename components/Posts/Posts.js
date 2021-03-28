import { useSession } from "next-auth/client";
import CardLight from "../UI/Card-Light/CardLight";
import styles from "../../styles/AddPost.module.css";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { useEffect, useState } from "react";
import PostForm from "../UI/Form/PostForm";
import { useAlert } from "../../store/AlertContext";

function Posts() {
  const [session] = useSession();

  const [showModal, setShowModal] = useState(false);

  const { showAlert } = useAlert();

  const [loading, setLoding] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts/get-posts")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.message);
        });
      })
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((err) => {
        showAlert({
          type: "error",
          desc: err.message || "Something went wrong!",
        });
      });
    setLoding(false);
  }, []);

  const handleClick = () => {
    setShowModal((prevState) => !prevState);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (loading) {
    return <h1 className="flex-center featured font-big">Loading...</h1>;
  }
  return (
    <section className="all-posts-container">
      <h1 className="py-1 text-center featured">All Posts</h1>
      <div className="underline"></div>
      {session && (
        <div className={styles.createPostContainer}>
          <button className={styles.createPostBtn} onClick={handleClick}>
            <PostAddIcon fontSize="large" color="inherit" />
          </button>
        </div>
      )}
      {showModal && <PostForm closeModal={closeModal} />}
      <div className="card-list-all-posts">
        <section className="light-card-container">
          {posts &&
            posts.map((post) => <CardLight key={post._id} post={post} />)}
        </section>
      </div>
    </section>
  );
}

export default Posts;
