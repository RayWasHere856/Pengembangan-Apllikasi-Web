// mengimpor komponen dari halaman halaman lain
import React from 'react';
import '../style/TambahMahasiswa.css';

// Komponen About menampilkan informasi mengenai tujuan proyek
function About() {
  return (
    <div className="home-page-container">
      <div className="tambah-murid-card">
        <div className="card-header"><h3>Tentang Proyek Ini</h3></div>
        <div className="card-body">
          <h2 style={{ marginBottom: '10px' }}>Topik Pembahasan: Student List</h2>
          <p>Proyek ini dibuat untuk mendemonstrasikan beberapa konsep dasar dalam React:</p>
          <ul style={{ margin: '10px 20px' }}>
            <li>Menyimpan daftar mahasiswa yang berisi NIM, Nama, Jurusan, dan Semester.</li>
            <li>Pemanfaatan <strong>Props</strong> untuk menampilkan data setiap mahasiswa.</li>
            <li>Pemanfaatan <strong>useState</strong> untuk menambah data mahasiswa baru.</li>
            <li>Pemanfaatan <strong>useEffect</strong> untuk memantau perubahan data.</li>
            <li>Penggunaan <strong>React Router</strong> untuk navigasi antar halaman.</li>
          </ul>
          <hr style={{ margin: '25px 0', border: 'none', borderTop: '1px solid #eee' }} />
          <h2 style={{ marginBottom: '10px' }}>Dibuat Oleh:</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '5px' }}>
            <li>- Rayhan Alamsyah (241130408)</li>
            <li>- Rava Abde Kemala (241131035)</li>
            <li>- Doni Tambunan (241131047)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
