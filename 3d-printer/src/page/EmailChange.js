import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailChange.css';

function EmailChange() {
  const navigate = useNavigate();
  const [newEmail, setNewEmail] = useState('');

  return (
    <div className="email-page">

      {/* 사이드바 */}
      <div className="setting-sidebar">
        <div className="setting-title">
          <span className="setting-icon-wrap">⚙️</span>
          <span className="setting-title-text">설정</span>
        </div>
        <nav className="setting-nav">
          <div className="setting-nav-item" onClick={() => navigate('/settings')}>계정</div>
          <div className="setting-nav-item" onClick={() => navigate('/settings')}>알림</div>
        </nav>
      </div>

      {/* 콘텐츠 */}
      <div className="email-content">
        <h3 className="email-section-label">로그인 정보</h3>
        <hr className="email-divider" />

        <h2 className="email-title">이메일 변경/확인</h2>

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