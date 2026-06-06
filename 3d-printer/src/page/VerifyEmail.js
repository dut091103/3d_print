import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VerifyEmail.css';

function VerifyEmail() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(547); // 9분 7초
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive || timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleResend = () => {
    setTimer(547);
    setIsActive(true);
    setCode('');
    alert('인증코드가 재발송되었습니다.');
  };

  const handleConfirm = () => {
    if (!code) {
      alert('인증코드를 입력해주세요.');
      return;
    }
    alert('인증이 완료되었습니다.');
    navigate('/Login');
  };

  return (
    <div className="verify-container">
      <img src="/login.png" alt="background" className="verify-bg" />

      <div className="verify-card">
        <h2 className="verify-title">비밀번호 찾기</h2>

        {/* 재발송 버튼 */}
        <button className="verify-resend-btn" onClick={handleResend}>
          재발송
        </button>

        {/* 이메일 인증 */}
        <div className="verify-label">이메일 인증</div>
        <div className="verify-input-row">
          <input
            type="text"
            className="verify-input"
            placeholder="인증코드 입력"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <span className={`verify-timer ${timer <= 60 ? 'red' : ''}`}>
            {formatTime(timer)}
          </span>
          <button className="verify-check-btn" onClick={handleConfirm}>
            확인
          </button>
        </div>

        {/* 확인 버튼 */}
        <button className="verify-confirm-btn" onClick={handleConfirm}>
          확인
        </button>

        <div className="verify-help">인증번호를 받지 못하셨나요?</div>
      </div>
    </div>
  );
}

export default VerifyEmail;