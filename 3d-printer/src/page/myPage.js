import React from 'react';
import { useNavigate } from 'react-router-dom';
import './myPage.css';

function MyPage() {
  const navigate = useNavigate();

  return (
    <div className="mypage-container">
      {/* 상단 배너 */}
      <div className="my-title">
        <img src="/mypage.png" alt="My Page" className="my-header" />
        <div className="title-font my-font">마이페이지</div>

        {/* ✅ 이렇게 바꾸기 */}
        <button
        type="button"
        className="setting-button"
        onClick={() => navigate('/settings')}
      >
        <img src="/setting.png" alt="설정" className="setting-icon" />
      </button>
      </div>

      {/* 프로필 영역 */}
      <div className="profile">
        {/* ✅ wrapper: profile-card가 absolute의 기준점 역할 */}
        <div className="profile-card">
          <img src="/profile.png" alt="Profile" className="profile-image" />
          <div className="profile-info">
            <div className="profile-name">홍 길 동</div>
            <div className="profile-grade">서울로봇고등학교 3학년</div>
          </div>
        </div>
      </div>
      <div className="printer-info">
        <div className="title-font my-font">사용중인 프린터</div>
        <img src="/Available.png" alt="Printer" className="printer-image" />
        <div className="printer-name-wrapper">
          <img src="/name.png" alt="Printer" className="printer-image-bg" />
          <div className="printer-status">2층 소프트웨어과<br/>프린터n</div>
        </div>
      </div>
      <div className="record">
        <div className="title-font my-font">내 기록 보기</div>
        <hr />

        {/* 헤더 */}
        <div style={{ position: 'relative', display: 'flex' }}>
  
          {/* 프린터 번호 열 */}
          <div style={{ flex: 1 }}>
            <div className="line" style={{ padding: '10px 0', textAlign: 'center' }}>프린터 번호</div>
            <div style={{ padding: '10px 0', textAlign: 'center' }}>프린터A</div>
            <div style={{ padding: '10px 0', textAlign: 'center' }}>프린터B</div>
          </div>

          {/* 세로줄 1 */}
          <div style={{ width: '1px', background: '#ccc' }} />

          {/* 시작 시간 열 */}
          <div style={{ flex: 1 }}>
            <div className="line" style={{ padding: '10px 0', textAlign: 'center' }}>시작 시간</div>
            <div style={{ padding: '10px 0', textAlign: 'center' }}>2026.05.08/17:00</div>
            <div style={{ padding: '10px 0', textAlign: 'center' }}>2026.05.08/14:00</div>
          </div>

          {/* 세로줄 2 */}
          <div style={{ width: '1px', background: '#ccc' }} />

          {/* 종료 시간 열 */}
          <div style={{ flex: 1 }}>
            <div className="line" style={{ padding: '10px 0', textAlign: 'center' }}>종료 시간</div>
            <div style={{ padding: '10px 0', textAlign: 'center' }}>2026.05.08/22:40</div>
            <div style={{ padding: '10px 0', textAlign: 'center' }}>2026.05.08/16:20</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MyPage;