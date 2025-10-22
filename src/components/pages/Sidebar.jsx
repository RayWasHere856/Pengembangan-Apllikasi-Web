import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Sidebar.css'; // Impor file CSS baru

function Sidebar() { // Nama fungsi juga diubah agar konsisten
  return (
    <nav className="sidebar"> {/* Terapkan class .sidebar di sini */}
    <h2 className='h2-sidebar'>Sidebar Mahasiswa</h2>
    <hr />
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">Home (Daftar)</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/about" className="sidebar-link">Tentang</Link>
        </li>
        {/* Anda bisa tambahkan link lain di sini jika perlu */}
      </ul>
    </nav>
  );
}

export default Sidebar; // Export dengan nama baru