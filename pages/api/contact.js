import { MongoClient } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid input.",
      });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://Zahid:CXAjRkytegMq3pDY@db-cwz.qghn5.mongodb.net/next-blog?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({
        message: "Could not connect to the database.",
      });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({
        message: "Sending message failed!",
      });
      return;
    }

    client.close();

    res.status(201).json({
      message: "Successfully Sent.",
      data: newMessage,
    });
  }
};
