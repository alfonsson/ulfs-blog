import { getDatabase } from '../../db';

export default async function handler(req, res) {
  const db = await getDatabase();
  const collection = db.collection('news');

  if (req.method === 'GET') {
    const news = await collection.find({}).toArray();
    res.status(200).json(news);
  } else if (req.method === 'POST') {
    const newNews = req.body;
    const result = await collection.insertOne(newNews);
    res.status(201).json(result.ops[0]);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
