import { NowRequest, NowResponse } from "@vercel/node";
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

export default async (request: NowRequest, response: NowResponse) => {
  const { name, email, cpf, genre } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection("subscribers");

  await collection.insertOne({
    name,
    email,
    cpf,
    genre,
    subscribedAt: new Date(),
  });

  return response.status(201).json({ message: "Success" });
};
