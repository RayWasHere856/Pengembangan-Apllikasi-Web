import React from "react";

function DataMahasiswa({ nomor, nim, nama, semester, jurusan }) {
  return (
    <li>
      <h3>{nomor}. {nama} ({nim})</h3>
      <p>Jurusan {jurusan} - Semester {semester}</p>
    </li>
  );
}

export default DataMahasiswa;
