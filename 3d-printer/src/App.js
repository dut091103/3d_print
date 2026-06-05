// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'; 
import LoginPage from './page/loginPage';
import RegisterPage from './page/registerPage'; 
import MainPage from './page/mainPage';
import ReservationPage from './page/reservationPage';
import MyPage from './page/myPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [printerStates, setPrinterStates] = useState([true, true, true, true]);

  return (
    <Router>
      <div className="App">
        <header className="global-header">
          <div className="header-container">
            <div className="header-left-group">
              <Link to="/Home" className="logo-link menu-item">홈</Link>
              <Link to="/Reservation" className="menu-item">예약</Link>
              <Link to="/mypage" className="menu-item text-nowrap mypage-item">마이페이지</Link>
            </div>
            <div className="header-center-group">
              <img src="/spam.svg" alt="spam" className="spam-img" />
              <img src="/srh.svg" alt="srh" className="srh-img" />
            </div>
            <div className="header-right-group">
              <Link to="/History" className="menu-item logout-item">로그아웃</Link>
            </div>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={isLoggedIn ? <Navigate to="/Home" replace /> : <Navigate to="/Login" replace />} 
            />

            {/* ✅ props 제대로 넘기기 */}
            <Route path="/Home" element={
              <MainPage printerStates={printerStates} setPrinterStates={setPrinterStates} />
            } />
            <Route path="/Reservation" element={
              <ReservationPage printerStates={printerStates} setPrinterStates={setPrinterStates} />
            } />

            <Route path="/mypage" element={<MyPage printerStates={printerStates} setPrinterStates={setPrinterStates}/>} />
            <Route path="/Login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/Register" element={<RegisterPage />} />
          </Routes>
        </main>

        <div className="footer">
          <p>서울로봇고등학교 3D 프린터 관리 시스템</p>
          <p>SPAM 동아리에서 제작</p>
          <div className="footer-content">
            <span>Frontend: react</span>
            <span>Backend: DRF</span>
            <span>Design: figma</span>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;