import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailChange.css';

function EmailChange() {
  const navigate = useNavigate();
  const [newEmail, setNewEmail] = useState('');
  const [activeMenu, setActiveMenu] = useState('계정');

  return (
    <div className="email-page">

      {/* 사이드바 */}
      <div className="setting-sidebar">
        <div className="setting-title">
          <img src="/setting.png" alt="설정" className="setting-icon-img" />  {/* ← 이미지로 교체 */}
          <span className="setting-title-text">설정</span>
        </div>
        <nav className="setting-nav">
          <div
                className={`setting-nav-item ${activeMenu === '계정' ? 'active' : ''}`}
                onClick={() => setActiveMenu('계정')}
            >
                계정
            </div>
          <div
                className="setting-nav-item"
                onClick={() => navigate('/notification')}
            >
                알림
            </div>
        </nav>
      </div>

      {/* 콘텐츠 */}
      <div className="email-content">
        <h2 className="sub-title">로그인 정보</h2>
        <hr className="email-divider" />
        <h2 className="sub-title">이메일 변경/확인</h2>


        <div className="email-item">
          <span className="email-label">기존 이메일</span>
          <span className="email-bar">|</span>
          <span className="email-value">abcdefg@gmail.com</span>
        </div>

        <div className="email-item">
          <span className="email-label">새 이메일</span>
          <span className="email-bar">|</span>
          <input
            className="email-input"
            type="email"
            placeholder="..."
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
      </div>

    </div>
  );
}

export default EmailChange;