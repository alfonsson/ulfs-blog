import { useEffect, useState } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <h1>articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>{article.title}<br />{article.text}</li>
        ))}
      </ul>
    </div>
  );
}
