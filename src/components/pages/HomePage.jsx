import React, { useState, useEffect } from "react";
// Path ini benar karena file-file ini ada di folder 'pages' yang sama
import TambahMurid from "./TambahMurid.jsx";
import DataMahasiswa from "./DataMahasiswa.jsx";

// Path import CSS Anda yang sudah dikoreksi
import '../style/TambahMurid.css';

function HomePage() {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([
    { nim: 241130408, nama: "Rayhan Alamsyah", semester: 3, jurusan: "Teknologi Informasi" },
    { nim: 241131035, nama: "Rava Abde Kemala Dewa", semester: 5, jurusan: "Teknik Informatika" },
    { nim: 241131047, nama: "Doni Tambunan", semester: 1, jurusan: "Sistem Informasi" }
  ]);

  useEffect(() => { console.log(`Jumlah mahasiswa sekarang: ${daftarMahasiswa.length}`); }, [daftarMahasiswa]);

  const tambahMahasiswaBaru = (dataMahasiswaBaru) => {
    const terdaftar = daftarMahasiswa.find((mhs) => mhs.nim === dataMahasiswaBaru.nim);
    if (terdaftar) alert("Mahasiswa dengan NIM tersebut sudah terdaftar.\nSilakan masukkan NIM lain.");
    else { setDaftarMahasiswa([...daftarMahasiswa, dataMahasiswaBaru]); alert("Data mahasiswa berhasil ditambahkan!"); }
  };

  return (
    // Terapkan container layout di sini
    <div className="home-page-container">
      <TambahMurid onTambahMahasiswa={tambahMahasiswaBaru} />

      <h2>Daftar Mahasiswa</h2>

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
            {daftarMahasiswa.map((mhs, index) => (
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