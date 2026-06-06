<nav className="navbar-container">
  <Link to="/Home" className={`nav-item ${location.pathname === '/Home' ? 'active' : ''}`}>
    홈
  </Link>
  <Link to="/Reservation" className={`nav-item ${location.pathname === '/Reservation' ? 'active' : ''}`}>
    예약
  </Link>
  <Link to="/mypage" className={`nav-item ${location.pathname === '/mypage' ? 'active' : ''}`}>
    마이페이지
  </Link>
  <Link to="/logout" className={`nav-item ${location.pathname === '/logout' ? 'active' : ''}`}>
    로그아웃
  </Link>

  {/* 설정 버튼 */}
  <Link to="/settings" className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}>
    <img src="/setting.png" alt="설정" className="setting-icon" />
  </Link>
</nav>