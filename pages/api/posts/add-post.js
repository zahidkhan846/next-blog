import { MongoClient } from "mongodb";

export default async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const {
    title,
    author,
    content,
    code,
    tags,
    isFeatured,
    createdAt,
    imageUrl,
  } = req.body;

  if (
    !title ||
    title.trim() === "" ||
    title.length < 10 ||
    !author ||
    author.trim() === "" ||
    !content ||
    content.trim() === "" ||
    content.length < 50 ||
    tags.length < 1 ||
    !imageUrl
  ) {
    res.status(422).json({
      message: "Invalid Input!",
    });
    return;
  }

  const newPost = {
    title: title,
    author: author,
    content: content,
    code: code,
    tags: tags,
    isFeatured: isFeatured,
    createdAt: createdAt,
    imageUrl: imageUrl,
  };

  let client;

  try {
    client = await MongoClient.connect(process.env.MONGODB_URI);
  } catch (err) {
    client.close();
    res.status(500).json({
      message: "Could not connect to database.",
    });
    return;
  }

  const db = client.db();

  try {
    await db.collection("posts").insertOne(newPost);
  } catch (error) {
    client.close();
    res.status(422).json({
      message: "Unable to post.",
    });
    return;
  }

  client.close();

  res.status(200).json({
    message: "Successfully Posted!",
  });
};
