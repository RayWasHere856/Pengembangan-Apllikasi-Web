import React, { useState } from "react";

function TambahMurid({ onTambahMahasiswa }) {
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [semester, setSemester] = useState("");
  const [jurusan, setJurusan] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nim || !nama || !semester || !jurusan) {
      alert("Semua kolom harus diisi!");
      return;
    }
    onTambahMahasiswa({ nim, nama, semester, jurusan });
    setNim(""); setNama(""); setJurusan(""); setSemester("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="NIM" value={nim} onChange={(e) => setNim(e.target.value)} /><br />
      <input type="text" placeholder="Nama Mahasiswa" value={nama} onChange={(e) => setNama(e.target.value)} /><br />
      <select value={jurusan} onChange={(e) => setJurusan(e.target.value)}>
        <option value="">-- Pilih Jurusan --</option>
        <option value="Teknologi Informasi">Teknologi Informasi</option>
        <option value="Teknik Informatika">Teknik Informatika</option>
        <option value="Sistem Informasi">Sistem Informasi</option>
        <option value="Manajemen Informatika">Manajemen Informatika</option>
        <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
      </select><br />
      <input type="number" placeholder="Semester" value={semester} onChange={(e) => setSemester(e.target.value)} /><br />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TambahMurid;
