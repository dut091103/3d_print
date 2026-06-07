import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordChange.css';

function PasswordChange() {
  const navigate = useNavigate();
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [oldPw, setOldPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  return (
    <div className="pw-page">

      {/* 사이드바 */}
      <div className="setting-sidebar">
        <div className="setting-title">
          <img src="/setting.png" alt="설정" className="setting-icon-img" />  {/* ← 이미지로 교체 */}
          <span className="setting-title-text">설정</span>
        </div>
        <nav className="setting-nav">
          <div className="setting-nav-item" onClick={() => navigate('/settings')}>계정</div>
          <div className="setting-nav-item" onClick={() => navigate('/settings')}>알림</div>
        </nav>
      </div>

      {/* 콘텐츠 */}
      <div className="pw-content">
        <h3 className="pw-section-label">로그인 정보</h3>
        <hr className="pw-divider" />

        <h2 className="pw-title">비밀번호 변경</h2>

        {/* 기존 비밀번호 */}
        <div className="pw-item">
          <span className="pw-label">기존 비밀번호</span>
          <span className="pw-bar">|</span>
          <input
            className="pw-input"
            type={showOld ? 'text' : 'password'}
            placeholder="..."
            value={oldPw}
            onChange={(e) => setOldPw(e.target.value)}
          />
          <button className="eye-btn" onClick={() => setShowOld(!showOld)}>
            {showOld ? '🙈' : '👁️'}
          </button>
        </div>

        {/* 새 비밀번호 */}
        <div className="pw-item">
          <span className="pw-label">새 비밀번호</span>
          <span className="pw-bar">|</span>
          <input
            className="pw-input"
            type={showNew ? 'text' : 'password'}
            placeholder="..."
            value={newPw}
            onChange={(e) => setNewPw(e.target.value)}
          />
          <button className="eye-btn" onClick={() => setShowNew(!showNew)}>
            {showNew ? '🙈' : '👁️'}
          </button>
        </div>

        {/* 비밀번호 확인 */}
        <div className="pw-item">
          <span className="pw-label">비밀번호 확인</span>
          <span className="pw-bar">|</span>
          <input
            className="pw-input"
            type={showConfirm ? 'text' : 'password'}
            placeholder="..."
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
          />
          <button className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? '🙈' : '👁️'}
          </button>
        </div>

      </div>
    </div>
  );
}

export default PasswordChange;