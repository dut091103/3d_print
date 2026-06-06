<nav className="navbar-container">
  <Link to="/Home" className={`nav-item ${location.pathname === '/Home' ? 'active' : ''}`}>
    홈
  </Link>
  <Link to="/reservation" className={`nav-item ${location.pathname === '/reservation' ? 'active' : ''}`}>
    예약
  </Link>
  <Link to="/mypage" className={`nav-item ${location.pathname === '/mypage' ? 'active' : ''}`}>
    마이페이지
  </Link>
  <Link to="/logout" className={`nav-item ${location.pathname === '/logout' ? 'active' : ''}`}>
    로그아웃
  </Link>
  <Link to="/email-change" className={`nav-item ${location.pathname === '/email-change' ? 'active' : ''}`}>
    이메일 변경/확인
  </Link>
  <Link to="/notification" className={`nav-item ${location.pathname === '/notification' ? 'active' : ''}`}>
    알림
  </Link>

  {/* 설정 버튼 추가 */}
  <Link to="/settings"
    className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}
  >
    <img src="/setting.png" alt="설정" className="setting-icon" />
  </Link>
</nav>