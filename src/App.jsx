import React, { useState } from 'react';
import './styles/style.css';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
  const [activeTab, setActiveTab] = useState('Login');

  return (
    <div className="app-container">
      <header>
        <h1>My News Application</h1>
        <input
          type="text"
          placeholder="Global Search..."
          className="global-search-bar"
        />
      </header>
      <nav>
        <button onClick={() => setActiveTab('Login')}>Login</button>
        <button onClick={() => setActiveTab('Dashboard')}>News Dashboard</button>
        <button onClick={() => setActiveTab('Home')}>Home</button>
      </nav>
      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(${
              activeTab === 'Login' ? '0%' : activeTab === 'Dashboard' ? '-100%' : '-200%'
            })`,
          }}
        >
          <section className="slider-section">
            <Auth />
          </section>
          <section className="slider-section">
            <Dashboard />
          </section>
          <section className="slider-section">
            <Home />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
