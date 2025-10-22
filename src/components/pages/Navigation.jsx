import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <h1>Aplikasi Data Mahasiswa</h1>
      <Link to="/">Home (Daftar)</Link>
      {' | '}
      <Link to="/about">Tentang</Link>
    </nav>
  );
}

export default Navigation;
