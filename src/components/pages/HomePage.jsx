import React, { useState, useEffect } from "react";
import TambahMurid from "./TambahMahasiswa.jsx";
import DataMahasiswa from "./DataMahasiswa.jsx";
import '../style/TambahMahasiswa.css';

function HomePage() {
  // State utama untuk menyimpan daftar mahasiswa
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([
    { nim: 241130408, nama: "Rayhan Alamsyah", semester: 3, jurusan: "Teknologi Informasi" },
    { nim: 241131035, nama: "Rava Abde Kemala Dewa", semester: 5, jurusan: "Teknik Informatika" },
    { nim: 241131047, nama: "Doni Tambunan", semester: 1, jurusan: "Sistem Informasi" }
  ]);

  // State untuk kata pencarian dan kriteria filter (nama atau NIM)
  const [searchQuery, setSearchQuery] = useState("");
  const [filterKriteria, setFilterKriteria] = useState("nama");

  // Useeffect yang menampilkan jumlah total mahasiswa ke konsol setiap kali daftar berubah
  useEffect(() => {
    console.log(`Jumlah total mahasiswa sekarang: ${daftarMahasiswa.length}`);
  }, [daftarMahasiswa]);

  // Fungsi untuk menambahkan data mahasiswa baru
  const tambahMahasiswaBaru = (dataMahasiswaBaru) => {
    const terdaftar = daftarMahasiswa.find((mhs) => mhs.nim === dataMahasiswaBaru.nim);
    if (terdaftar) alert("Mahasiswa dengan NIM tersebut sudah terdaftar.\nSilakan masukkan NIM lain.");
    else {
      setDaftarMahasiswa([...daftarMahasiswa, dataMahasiswaBaru]);
      alert("Data mahasiswa berhasil ditambahkan!");
    }
  };

  // Filter daftar mahasiswa berdasarkan kriteria pencarian
  const filteredMahasiswa = daftarMahasiswa.filter(mhs => {
    if (searchQuery === "") return true;
    if (filterKriteria === "nama") return mhs.nama.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterKriteria === "nim") return String(mhs.nim).includes(searchQuery);
    return true;
  });

  return (
    <div className="home-page-container">
      {/* Komponen untuk menambah data mahasiswa baru */}
      <TambahMurid onTambahMahasiswa={tambahMahasiswaBaru} />

      {/* Judul daftar mahasiswa */}
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
            </tr>
          </thead>
          <tbody>
            {filteredMahasiswa.map((mhs, index) => (
              <DataMahasiswa
                key={mhs.nim}
                nomor={index + 1}
                nim={mhs.nim}
                nama={mhs.nama}
                semester={mhs.semester}
                jurusan={mhs.jurusan}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
