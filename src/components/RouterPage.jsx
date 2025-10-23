import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import komponen halaman utama aplikasi
import Header from './pages/Header.jsx';
import Sidebar from './pages/Sidebar.jsx';
import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';

// Import berkas gaya utama
import './style/index.css';

/**
 * Berfungsi untuk mengatur struktur layout aplikasi
 */
function RouterPage() {
  return (
    <div>
      {/* Komponen navigasi samping */}
      <Sidebar />
      
      {/* Komponen header utama */}
      <Header/>

      {/* Area konten utama tempat halaman dirender */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />  {/* Halaman utama */}
          <Route path="/about" element={<About />} /> {/* Halaman tentang */}
        </Routes>
      </div>
    </div>
  );
}

export default RouterPage;
