import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Path import "./" benar karena semua file ada di folder 'pages'
import Header from './pages/Header.jsx';
import Sidebar from './pages/Sidebar.jsx';
import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';

// Path import CSS sidebar
import './style/Sidebar.css';

function RouterPage() {
  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default RouterPage;