import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Sidebar.css';

function Sidebar() {
  return (
    // Elemen utama navigasi samping
    <nav className="sidebar">
      
      {/* Bagian header sidebar berisi judul */}
      <div className="sidebar-header">
        <h2 className="h2-sidebar">Sidebar Mahasiswa</h2>
      </div>

      <hr />

      {/* Daftar tautan navigasi ke halaman lain */}
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">Home (Daftar)</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/about" className="sidebar-link">Tentang</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
