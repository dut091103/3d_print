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

          {/* 복잡한 것 다 지우고 이 상자 하나에 순서대로 다 넣습니다 */}
          <header className="global-header">
            {/* 복잡한 것 다 지우고 이 상자 하나에 순서대로 다 넣습니다 */}
            <div className="header-container">
              
              {/* 1. 홈 (로고) */}
              <Link to="/" className="logo-link">
                <span className="logo-text">홈</span>
              </Link>

              {/* 2. 메뉴들 */}
              <Link to="/History" className="menu-item">기록</Link>
              <Link to="/Reservation" className="menu-item text-nowrap">예약</Link>

              {/* 3. 스팸 이미지 */}
              <img src="/spam.png" alt="spam" className="spam-img" />

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
            
            <Route path="/History" element={<div>기록 화면 콘텐츠 (준비중)</div>} />
            <Route path="/Reservation" element={<div>예약 화면 콘텐츠 (준비중)</div>} />
            
            {/* 🔑 로그인 페이지 경로 */}
            <Route path="/Login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            
            {/* 📝 회원가입 페이지 경로 */}
            <Route path="/Register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;