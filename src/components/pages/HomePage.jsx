import React, { useState, useEffect } from "react";
import TambahMurid from "./TambahMurid.jsx";
import DataMahasiswa from "./DataMahasiswa.jsx";

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
    <div>
      <h2>Tambah Mahasiswa Baru</h2>
      <TambahMurid onTambahMahasiswa={tambahMahasiswaBaru} />
      <h2>Daftar Mahasiswa</h2>
      <ul>{daftarMahasiswa.map((mhs, index) => (
        <DataMahasiswa key={mhs.nim} nomor={index + 1} nim={mhs.nim} nama={mhs.nama} semester={mhs.semester} jurusan={mhs.jurusan} />
      ))}</ul>
    </div>
  );
}

export default HomePage;
