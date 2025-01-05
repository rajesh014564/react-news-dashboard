import React from 'react';
import { Bar } from 'react-chartjs-2';

function NewsAnalytics() {
  const data = {
    labels: ['Author1', 'Author2', 'Author3'],
    datasets: [
      {
        label: 'Articles',
        data: [5, 10, 3],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>News Analytics</h2>
      <Bar data={data} />
    </div>
  );
}

export default NewsAnalytics;