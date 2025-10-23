import React from "react";

// Komponen DataMahasiswa menampilkan satu baris data mahasiswa dalam tabel
function DataMahasiswa({ nomor, nim, nama, semester, jurusan }) {
  return (
    // Setiap data mahasiswa ditampilkan dalam satu baris tabel
    <tr>
      {/* Nomor data mahasiswa */}
      <td>{nomor}</td>
      {/* NIM mahasiswa */}
      <td>{nim}</td>
      {/* Nama mahasiswa */}
      <td>{nama}</td>
      {/* Jurusan mahasiswa */}
      <td>{jurusan}</td>
      {/* Semester mahasiswa */}
      <td>{semester}</td>
    </tr>
  );
}

export default DataMahasiswa;
