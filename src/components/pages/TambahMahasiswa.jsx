import React, { useState } from "react";
import '../style/TambahMahasiswa.css';

function TambahMurid({ onTambahMahasiswa }) {
  // State untuk menyimpan input dari setiap kolom formulir
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [semester, setSemester] = useState("");
  const [jurusan, setJurusan] = useState("");

  // Fungsi untuk menangani proses penambahan data mahasiswa baru
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validasi sederhana agar tidak ada kolom kosong
    if (!nim || !nama || !semester || !jurusan) {
      alert("Semua kolom harus diisi!");
      return;
    }

    // Kirim data mahasiswa baru ke komponen induk
    onTambahMahasiswa({ nim, nama, semester, jurusan });

    // Reset nilai input setelah data berhasil dikirim
    setNim(""); setNama(""); setJurusan(""); setSemester("");
  };

  return (
    // Kartu utama untuk formulir penambahan mahasiswa
    <div className="tambah-murid-card">
      <div className="card-header">
        <h3>Tambahkan Mahasiswa</h3>
      </div>

      <div className="card-body">
        {/* Formulir untuk memasukkan data mahasiswa */}
        <form onSubmit={handleSubmit}>
          <label>Masukan NIM</label>
          <input type="text" placeholder="NIM" value={nim} onChange={(e) => setNim(e.target.value)} /><br />

          <label>Masukan Nama</label>
          <input type="text" placeholder="Nama Mahasiswa" value={nama} onChange={(e) => setNama(e.target.value)} /><br />

          <label>Pilih Jurusan</label>
          <select value={jurusan} onChange={(e) => setJurusan(e.target.value)}>
            <option value="">-- Pilih Jurusan --</option>
            <option value="Teknologi Informasi">Teknologi Informasi</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Manajemen Informatika">Manajemen Informatika</option>
            <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
          </select><br />

          <label>Semester</label>
          <input type="number" placeholder="Semester" value={semester} onChange={(e) => setSemester(e.target.value)} /><br />

          <button type="submit">Tambah</button>
        </form>
      </div>
    </div>
  );
}

export default TambahMurid;
