import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { saveAs } from 'file-saver';
import 'chart.js/auto'; // Automatically registers Chart.js components

function Dashboard() {
  const [newsList, setNewsList] = useState([]);
  const [filters, setFilters] = useState({
    author: '',
    type: '',
  });
  const [payouts, setPayouts] = useState({});
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    // Simulating API fetch
    const fetchedNews = [
      { id: 1, title: 'React 18 Released', author: 'John', date: '2025-01-01', type: 'news' },
      { id: 2, title: 'Vite: Build Tool', author: 'Jane', date: '2025-01-02', type: 'blog' },
      { id: 3, title: 'CSS Responsive Design', author: 'Alice', date: '2025-01-03', type: 'news' },
    ];
    setNewsList(fetchedNews);
    setFilteredNews(fetchedNews);

    // Initialize payouts
    const initialPayouts = fetchedNews.reduce((acc, news) => {
      acc[news.author] = acc[news.author]
        ? { ...acc[news.author], articles: acc[news.author].articles + 1 }
        : { articles: 1, payout: 0 };
      return acc;
    }, {});
    setPayouts(initialPayouts);
  }, []);

  const handleFilter = () => {
    const filtered = newsList.filter((news) => {
      const matchAuthor = filters.author ? news.author.toLowerCase().includes(filters.author.toLowerCase()) : true;
      const matchType = filters.type ? news.type === filters.type : true;
      return matchAuthor && matchType;
    });
    setFilteredNews(filtered);
  };

  const handlePayoutEdit = (author, field, value) => {
    setPayouts((prev) => ({
      ...prev,
      [author]: {
        ...prev[author],
        [field]: value,
      },
    }));
  };

  const exportToCSV = () => {
    const csvData = filteredNews.map((news) => ({
      Title: news.title,
      Author: news.author,
      Date: news.date,
      Type: news.type,
    }));
    const csvContent =
      ['Title,Author,Date,Type']
        .concat(csvData.map((row) => `${row.Title},${row.Author},${row.Date},${row.Type}`))
        .join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'news_data.csv');
  };

  // Chart Data
  const chartData = {
    labels: [...new Set(filteredNews.map((news) => news.author).filter(Boolean))],
    datasets: [
      {
        label: 'Articles by Author',
        data: [...new Set(filteredNews.map((news) => news.author).filter(Boolean))].map(
          (author) => filteredNews.filter((news) => news.author === author).length
        ),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>

      {/* Overview Section */}
      <div className="overview">
        <h3>Total Articles: {filteredNews.length}</h3>
        <button onClick={exportToCSV} className="export-btn">
          Export to CSV
        </button>
      </div>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by Author"
          value={filters.author}
          onChange={(e) => setFilters({ ...filters, author: e.target.value })}
        />
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">All Types</option>
          <option value="news">News</option>
          <option value="blog">Blog</option>
        </select>
        <button onClick={handleFilter} className="filter-btn">
          Apply Filters
        </button>
      </div>

      {/* News Analytics */}
      <div className="analytics">
        <h3>News Analytics</h3>
        <Bar data={chartData} />
      </div>

      {/* Payout Table */}
      <div className="payout-section">
        <h3>Payout Details</h3>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Articles</th>
              <th>Payout (Editable)</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(payouts).map((author) => (
              <tr key={author}>
                <td>{author}</td>
                <td>{payouts[author].articles}</td>
                <td>
                  <input
                    type="number"
                    value={payouts[author].payout || ''}
                    onChange={(e) => handlePayoutEdit(author, 'payout', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;