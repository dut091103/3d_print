import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';

function LoginPage({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }
    console.log('로그인 시도:', { email, password });
    setIsLoggedIn(true); // 로그인 성공 처리
    navigate('/');       // 메인 화면으로 이동
  };

  return (
    <div className="login-page-container">
      {/* 배경 이미지 */}
      <img src="/login.png" alt="background" className="bg-image" />

      {/* 로그인 폼 카드 */}
      <div className="login-card">
        <h2 className="title-font">로그인</h2> {/* title-font로 글자 두껍게 만들기 */}
        <form onSubmit={handleSubmit} className="login-form">
          <span>이메일</span>
          <input
            type="email"
            name="email"
            placeholder="이메일 입력"
            value={email}
            onChange={onChange}
            className="login-input"
          />
          <span>비밀번호</span>
          <input
            type="password"
            name="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={onChange}
            className="login-input"
          />
          <button type="submit" className="login-button">
            로그인
          </button>
          <div className="auto-login">
            <input type="checkbox" name="자동 로그인" id="auto-login" className="checkbox"/>
            <label htmlFor="auto-login" className="checkbox-label">자동 로그인</label>

            <br /> {/* 줄바꿈 추가 */}
          <hr className="login-divider" /> {/* 로그인 버튼과 자동 로그인 사이에 구분선 추가 */}
          </div>
          {/* 💡 두 버튼을 한 상자로 묶어줍니다 */}
          <div className="bottom-buttons-container">
            <button type="button" className="password-button" onClick={() => navigate('/Register')}>
              회원가입
            </button>
            <button type="button" className="password-button">
              비밀번호 찾기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;