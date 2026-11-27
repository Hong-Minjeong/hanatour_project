import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router';
import './layout/css/Reset.css'; //초기화
import './layout/css/App.css'; //공통
import './layout/css/common.css';

//헤더, 푸터 콤포넌트
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './pages/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
