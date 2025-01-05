import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
  const articles = useSelector((state) => state.news.articles);

  return (
    <div>
      <h2>Articles Table</h2>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td>{article.author}</td>
              <td>{article.title}</td>
              <td>{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;