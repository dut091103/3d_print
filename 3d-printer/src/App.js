import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'; 
import LoginPage from './page/loginPage';
import RegisterPage from './page/registerPage'; 
import MainPage from './page/mainPage'; // 🚀 1. 새로 만든 메인 페이지 컴포넌트를 불러옵니다!
import './App.css';

function App() {
  // 시작 시 비로그인 상태이므로 false
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <Router>
      <div className="App">
        {/* 상단 고정 메뉴바 */}


          <header className="global-header">
            <div className="header-container">
              
              {/* [1] 좌측 영역: 메뉴들 */}
              <div className="header-left-group">
                <Link to="/Home" className="logo-link">
                  <span className="logo-text">홈</span>
                </Link>
                <Link to="/History" className="menu-item">예약</Link>
                <Link to="/Reservation" className="menu-item text-nowrap mypage-item">마이페이지</Link>
              </div>

              {/* [2] 중앙 영역: 로고 이미지들 */}
              <div className="header-center-group">
                <img src="/spam.png" alt="spam" className="spam-img" />
                <img src="/srh.png" alt="srh" className="srh-img" />
              </div>

              {/* [3] 우측 영역: 로그아웃 */}
              <div className="header-right-group">
                <Link to="/History" className="menu-item logout-item">로그아웃</Link>
              </div>

            </div>
          </header>
        


        {/* 헤더 아래 영역 */}
        <main className="main-content">
          <Routes>
            {/* 첫 주소('/') 접속 시 로그인 여부에 따라 이동 */}
            <Route 
              path="/" 
              element={isLoggedIn ? <Navigate to="/Home" replace /> : <Navigate to="/Login" replace />} 
            />
            
            {/* 🏠 2. 기존 <div> 글자 자리에 실제 MainPage 컴포넌트를 장착합니다! */}
            <Route path="/Home" element={<MainPage />} />
            
            <Route path="/Reservation" element={<reservationPage />} />
            <Route path="/mypage" element={<div>마이페이지 화면 콘텐츠 (준비중)</div>} />
            
            {/* 🔑 로그인 페이지 경로 */}
            <Route path="/Login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            
            {/* 📝 회원가입 페이지 경로 */}
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