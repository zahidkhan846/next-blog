import { ObjectId } from "bson";
import { getSession } from "next-auth/client";
import { dbConnect, getSingleDocument } from "../../../utils/database";

export default async (req, res) => {
  if (req.method === "GET") {
    const id = req.query.id;
    let client;

    try {
      client = await dbConnect();
    } catch (err) {
      res
        .status(500)
        .json({ message: "Somthing went wrong while connecting database." });
      return;
    }

    let singleDoc;
    try {
      singleDoc = await getSingleDocument(client, "posts", id);
      res.status(201).json({ post: singleDoc });
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ message: "Somthing went wrong while fetching data." });
    }

    client.close();
  }

  if (req.method === "DELETE") {
    const session = await getSession({ req: req });

    if (!session) {
      res.status(401).json({
        message: "Not authenticated!",
      });
      return;
    }

    const currUser = session.user.email;

    const id = req.query.id;

    const client = await dbConnect();

    const db = client.db();

    const postsCollection = db.collection("posts");

    const post = await postsCollection.findOne({ _id: new ObjectId(id) });

    if (!post) {
      res.status(404).json({
        message: "Could not find post!",
      });
      client.close();
      return;
    }

    if (post.userEmail !== currUser) {
      res.status(403).json({
        message: "User not authorized!",
      });
      client.close();
      return;
    }

    const deletePost = await postsCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });
    res.status(200).json({ message: "Success" });
  }
  return;
};
