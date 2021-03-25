import { MongoClient } from "mongodb";

export const dbConnect = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  return client;
};
