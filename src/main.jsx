import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Import komponen utama yang mengatur seluruh rute aplikasi
import RouterPage from './components/RouterPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <main>
          {/* Menampilkan struktur halaman utama melalui komponen RouterPage */}
          <RouterPage />
        </main>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
