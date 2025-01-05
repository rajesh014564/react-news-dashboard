import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNews } from '../redux/newsSlice';

function Filters() {
  const [author, setAuthor] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [type, setType] = useState('');
  const dispatch = useDispatch();

  const applyFilters = () => {
    // Dispatch a mock filtered data action
    dispatch(setNews([]));
  };

  return (
    <div>
      <h2>Filters</h2>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date Range"
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="news">News</option>
        <option value="blogs">Blogs</option>
      </select>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}

export default Filters;
