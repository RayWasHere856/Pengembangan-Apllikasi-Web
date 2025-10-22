import React from "react";
import { Route, Routes } from "react-router-dom";
//mengimport semua komponen dari halaman yang sudah dibuat
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";

function RouterPage() {
    return (
        //Route digunakan sebagai pembungkus Routes 
        <Routes>
            {/* Route digunakan untuk mengarahkan tampilan */}
            {/* Path digunakan untuk membaca url dan kemudian menampilkan halaman yang berada di dalam Element*/}
            <Route path="/" element={<HomePage/>} />
            <Route path="about" element={<About/>} />
        </Routes>
    )
}

export default RouterPage;