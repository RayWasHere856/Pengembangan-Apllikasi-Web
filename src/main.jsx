import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//Mengimpor komponen yang sudah di buat
import Navigation from './components/pages/Navigation.jsx';
import RouterPage from './components/RouterPage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      {/* Navigation berguna untuk memanggil komponen yang berada dihalaman Navigation agar tetap muncul di halaman lain */}
      <Navigation/>
      <hr />
      <main>
        {/* RouterPage berguna untuk memanggil komponen yang berada dihalaman RouterPage*/}
        <RouterPage />
      </main>
    </div>
    </BrowserRouter>
  </React.StrictMode>
)