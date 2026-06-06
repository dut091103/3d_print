import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // 상단바 전용 스타일 시트

function Navbar() {
  const location = useLocation(); // 현재 어떤 페이지에 있는지 알려주는 기능

  return (
    <nav className="navbar-container">
      {/* 🌟 <a> 태그 대신 <Link to="주소">를 사용합니다 */}
      {/* 🌟 to 주소를 대문자 "/Home"으로 변경하여 App.js의 Route와 싱크를 맞춥니다 */}
    <Link 
      to="/Home" 
      className={`nav-item ${location.pathname === '/Home' ? 'active' : ''}`}
    >
      홈
    </Link>
      
      
      <Link 
        to="/reservation" 
        className={`nav-item ${location.pathname === '/reservation' ? 'active' : ''}`}
      >
        예약
      </Link>
      <Link 
        to="/mypage" 
        className={`nav-item ${location.pathname === '/mypage' ? 'active' : ''}`}
      >
        마이페이지
      </Link>
      <Link 
        to="/logout" 
        className={`nav-item ${location.pathname === '/logout' ? 'active' : ''}`}
      >
        로그아웃
      </Link>
      <Link 
        to="/settings" 
        className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}
      >
        설정
      </Link>
      /* 상단바 전체를 감싸는 긴 띠 상자 */
    </nav>
  );
}

export default Navbar;