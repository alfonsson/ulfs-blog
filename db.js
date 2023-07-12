import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://Cluster67311:bFduZU5pQWV0@cluster67311.kz0gjtm.mongodb.net/?authMechanism=DEFAULT'

//const uri = 'mongodb://127.0.0.1:27017'; // Replace with your MongoDB connection string
const dbName = 'articles'; // Replace with your database name

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient && cachedClient.topology.isConnected()) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  return client;
}

export async function getDatabase() {
  const client = await connectToDatabase();
  return client.db(dbName);
}
