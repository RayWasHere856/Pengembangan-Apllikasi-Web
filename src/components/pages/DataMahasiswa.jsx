import React from "react";

function DataMahasiswa({ nomor, nim, nama, semester, jurusan }) {
  // Ganti <li>...</li> menjadi <tr>...</tr>
  return (
    <tr>
      {/* Buat 5 sel data (<td>) sesuai urutan header */}
      <td>{nomor}</td>
      <td>{nim}</td>
      <td>{nama}</td>
      <td>{jurusan}</td>
      <td>{semester}</td>
    </tr>
  );
}

export default DataMahasiswa;