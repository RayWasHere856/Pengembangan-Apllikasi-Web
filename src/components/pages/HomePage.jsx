import React, { useState } from "react"; // <-- Hapus useEffect
import TambahMurid from "./TambahMahasiswa.jsx";
import DataMahasiswa from "./DataMahasiswa.jsx";
import '../style/TambahMahasiswa.css';

// Terima props 'daftarMahasiswa' dan 'onTambahMahasiswa' dari RouterPage
function HomePage({ daftarMahasiswa, onTambahMahasiswa }) { 
  
  // State daftarMahasiswa dan fungsi tambahMahasiswaBaru TELAH DIPINDAHKAN

  // State untuk pencarian tetap di sini
  const [searchQuery, setSearchQuery] = useState("");
  const [filterKriteria, setFilterKriteria] = useState("nama");

  // useEffect TELAH DIPINDAHKAN

  // Filter daftar mahasiswa berdasarkan kriteria pencarian
  const filteredMahasiswa = daftarMahasiswa.filter(mhs => {
    if (searchQuery === "") return true;
    if (filterKriteria === "nama") return mhs.nama.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterKriteria === "nim") return String(mhs.nim).includes(searchQuery);
    return true;
  });

  return (
    <div className="home-page-container">
      {/* Kirim prop onTambahMahasiswa yang diterima dari RouterPage */}
      <TambahMurid onTambahMahasiswa={onTambahMahasiswa} />

      <h2>Daftar Mahasiswa</h2>

      {/* Bagian pencarian dan filter data */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder={`Cari berdasarkan ${filterKriteria}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="search-filter"
          value={filterKriteria}
          onChange={(e) => setFilterKriteria(e.target.value)}
        >
          <option value="nama">Nama</option>
          <option value="nim">NIM</option>
        </select>
      </div>

      {/* Tabel untuk menampilkan data mahasiswa */}
      <div className="mahasiswa-list-card">
        <table className="mahasiswa-table">
          <thead>
            <tr>
              <th>Nomor</th>
              <th>NIM</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Semester</th>
              <th>Aksi</th> {/* Header Aksi tetap ada */}
            </tr>
          </thead>
          <tbody>
            {filteredMahasiswa.map((mhs, index) => (
              <DataMahasiswa
                key={mhs.nim}
                nomor={index + 1}
                mahasiswa={mhs} // Kita tetap kirim seluruh objek mhs
                // Kita tidak perlu onLihatDetail lagi
              />
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Card detail yang sebelumnya ada di sini TELAH DIHAPUS */}
    </div>
  );
}

export default HomePage;