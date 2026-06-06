import React from 'react';
import { useNavigate } from 'react-router-dom';
import './myPage.css';

function MyPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* 상단 배너 */}
      <div className="my-title">
        <img src="/mypage.png" alt="My Page" className="my-header" />
        <div className="title-font my-font">마이페이지</div>
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
        <div className="title-font">사용중인 프린터</div>
        <img src="/Available.png" alt="Printer" className="printer-image" />
        <img src="/name.png" alt="Printer" className="printer-image name" />
        <div className="printer-status">3층 메이커랩실</div>
      </div>
    </>
  );
}

export default MyPage;