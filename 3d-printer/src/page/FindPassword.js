import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FindPassword.css';

function FindPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (!email || !name) {
        alert('이메일과 이름을 모두 입력해주세요.');
        return;
    }
    navigate('/verify-email');  // ← 인증 페이지로 이동
    };

  return (
    <div className="findpw-container">
      <img src="/login.png" alt="background" className="findpw-bg" />

      <div className="findpw-card">
        <h2 className="findpw-title">비밀번호 찾기</h2>

        <div className="findpw-form">
          <span className="findpw-label">이메일</span>
          <input
            type="email"
            className="findpw-input"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <span className="findpw-label">이름</span>
          <input
            type="text"
            className="findpw-input"
            placeholder="이름 입력"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button className="findpw-button" onClick={handleSubmit}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindPassword;