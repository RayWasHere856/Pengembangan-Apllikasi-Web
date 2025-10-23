import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../style/DetailMahasiswa.css';

function DetailMahasiswa({ daftarMahasiswa }) {
  // Mengambil parameter 'nim' dari URL menggunakan useParams()
  const { nim } = useParams();

  // Mencari data mahasiswa berdasarkan NIM
  const mahasiswa = daftarMahasiswa.find(
    (mhs) => mhs.nim === parseInt(nim)
  );

  // Jika data mahasiswa tidak ditemukan, tampilkan pesan error
  if (!mahasiswa) {
    return (
      <div className="detail-page-container">
        <div className="detail-card">
          <div className="card-header">
            <h3>Mahasiswa Tidak Ditemukan</h3>
          </div>
          <div className="card-body">
            <p>Mahasiswa dengan NIM <strong>{nim}</strong> tidak terdaftar secara resmi <br /> <strong>(Mohon Hubungi pihak kampus apabila terdapat informasi)</strong>.</p>
            <br />
            <Link to="/">
              <button>Kembali ke Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Jika data ditemukan, tampilkan detail mahasiswa dalam bentuk card
  return (
    <div className="detail-page-container">
      <div className="detail-card">
        <div className="card-header">
          <h3>Detail Mahasiswa</h3>
        </div>
        <div className="card-body">
          <p><strong>NIM:</strong> {mahasiswa.nim}</p>
          <p><strong>Nama:</strong> {mahasiswa.nama}</p>
          <p><strong>Jurusan:</strong> {mahasiswa.jurusan}</p>
          <p><strong>Semester:</strong> {mahasiswa.semester}</p>

          <hr style={{ margin: '15px 0', border: 'none', borderTop: '1px solid #eee' }} />

          <Link to="/">
            <button>Kembali</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailMahasiswa;
