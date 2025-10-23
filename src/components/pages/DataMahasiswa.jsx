import React from "react";
import { Link } from 'react-router-dom';

function DataMahasiswa({ nomor, mahasiswa }) {
  // Menyusun data mahasiswa agar lebih ringkas
  const { nim, nama, semester, jurusan } = mahasiswa;
 //mengembalikan nilai sesuai yang diminta
  return (
    <tr>
      <td>{nomor}</td>
      <td>{nim}</td>
      <td>{nama}</td>
      <td>{jurusan}</td>
      <td>{semester}</td>

      {/* Kolom aksi berisi tautan menuju halaman detail mahasiswa */}
      <td>
      <Link to={`/mahasiswa/${nim}`} style={{ padding: '5px 10px', fontSize: '12px', textDecoration: 'none', backgroundColor: '#007bff', color: 'white', borderRadius: '4px' }}>
      Lihat Detail
      </Link>

      </td>
    </tr>
  );
}

export default DataMahasiswa;
