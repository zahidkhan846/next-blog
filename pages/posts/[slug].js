import React from "react";
import Post from "../../components/Posts/Post/Post";
import { post } from "../../content/data";

function SinglePost() {
  return <Post post={post} />;
}

export default SinglePost;
