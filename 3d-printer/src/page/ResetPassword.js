import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';

function ResetPassword() {
  const navigate = useNavigate();
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  const handleSubmit = () => {
    if (!newPw || !confirmPw) {
      alert('비밀번호를 모두 입력해주세요.');
      return;
    }
    if (newPw !== confirmPw) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert('비밀번호가 변경되었습니다.');
    navigate('/Login');
  };

  return (
    <div className="resetpw-container">
      <img src="/login.png" alt="background" className="resetpw-bg" />

      <div className="resetpw-card">
        <h2 className="resetpw-title">비밀번호 변경</h2>

        <div className="resetpw-form">
          <span className="resetpw-label">새 비밀번호 입력</span>
          <input
            type="password"
            className="resetpw-input"
            placeholder="비밀번호 입력"
            value={newPw}
            onChange={(e) => setNewPw(e.target.value)}
          />

          <span className="resetpw-label">비밀번호 확인</span>
          <input
            type="password"
            className="resetpw-input"
            placeholder="비밀번호 입력"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
          />

          <button className="resetpw-button" onClick={handleSubmit}>
            변경하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;