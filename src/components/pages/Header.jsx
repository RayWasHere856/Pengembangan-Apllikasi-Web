import React from "react";
// 1. Impor file CSS layout Anda
import '../style/Sidebar.css'; 

const Header = () => {
    return (
        // 2. Tambahkan className="header-container" di sini
        <div className="header-container">
          <h1>Aplikasi Data Mahasiswa</h1>
        </div>
    )
}

export default Header;