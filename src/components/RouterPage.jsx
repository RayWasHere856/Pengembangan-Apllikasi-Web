import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import komponen halaman
import Header from './pages/Header.jsx';
import Sidebar from './pages/Sidebar.jsx';
import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import DetailMahasiswa from './pages/DetailMahasiswa.jsx';

import './style/index.css';

/**
 * Komponen RouterPage berfungsi sebagai pengatur rute utama aplikasi.
 * Di dalamnya terdapat state daftar mahasiswa, fungsi penambahan data baru,
 * serta konfigurasi navigasi untuk tiap halaman.
 */
function RouterPage() {
  // State utama untuk menyimpan daftar mahasiswa
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([
    { nim: 241130408, nama: "Rayhan Alamsyah", semester: 3, jurusan: "Teknologi Informasi" },
    { nim: 241131035, nama: "Rava Abde Kemala Dewa", semester: 5, jurusan: "Teknik Informatika" },
    { nim: 241131047, nama: "Doni Tambunan", semester: 1, jurusan: "Sistem Informasi" }
  ]);

  // Efek samping untuk memantau jumlah mahasiswa yang tersimpan
  useEffect(() => {
    console.log(`Jumlah total mahasiswa sekarang: ${daftarMahasiswa.length}`);
  }, [daftarMahasiswa]);

  // Fungsi menambah mahasiswa baru dan mencegah duplikasi NIM
  const tambahMahasiswaBaru = (dataMahasiswaBaru) => {
    const terdaftar = daftarMahasiswa.find((mhs) => mhs.nim === dataMahasiswaBaru.nim);
    if (terdaftar) alert("Mahasiswa dengan NIM tersebut sudah terdaftar.\nSilakan masukkan NIM lain.");
    else {
      setDaftarMahasiswa([...daftarMahasiswa, dataMahasiswaBaru]);
      alert("Data mahasiswa berhasil ditambahkan!");
    }
  };

  // Struktur utama aplikasi dan pengaturan route
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage daftarMahasiswa={daftarMahasiswa} onTambahMahasiswa={tambahMahasiswaBaru} />} 
          />
          <Route path="/about" element={<About />} />
          <Route path="/mahasiswa/:nim" element={<DetailMahasiswa daftarMahasiswa={daftarMahasiswa} />} />
        </Routes>
      </div>
    </div>
  );
}

export default RouterPage;
