import React from 'react';

function About() {
  return (
    <div>
      <h2>Tentang Aplikasi Student List</h2>
      <p>
        Aplikasi ini adalah proyek mini React yang dibuat untuk
        memenuhi tugas mata kuliah.
      </p>
      <p>Fitur utama aplikasi ini:</p>
      <ul>
        <li>Menambah dan menampilkan data mahasiswa.</li>
        <li>Navigasi antar halaman menggunakan React Router.</li>
        <li>State management dengan Hooks (useState).</li>
        <li>Lifecycle hook (useEffect) untuk monitoring data.</li>
        <li>Penggunaan Props untuk mengirim data ke komponen.</li>
      </ul>
    </div>
  );
}

export default About;