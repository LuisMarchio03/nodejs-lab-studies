import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, Db } from "mongodb";
import url from "url";

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  return db;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("subscribers");

  const form = await collection.find({}).toArray();

  res.statusCode = 200;
  res.json(form);
};
