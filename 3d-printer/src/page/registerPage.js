import Select from 'react-select';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css'; 
import './registerPage.css'; // 가로 배치를 위한 CSS 스타일이 들어갈 곳

function RegisterPage() {
  const navigate = useNavigate();
  
  // 생년월일을 년, 월, 일로 쪼개서 관리합니다.
  const [inputs, setInputs] = useState({ 
    email: '',  
    name: '',
    password: '', 
    passwordConfirm: '', // 비밀번호 확인도 구분을 위해 따로 분리
    phone: '', 
    year: '',
    month: '',
    day: '',
    grade: '',
    Class: '',
    studentId: ''
  });
  
  const { name, email, password, passwordConfirm, phone, year, month, day, grade, Class, studentId } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. 비밀번호 확인 검증 추가
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return; // 폼 전송을 중단하고 페이지에 그대로 남음
    }

    // 2. 빈 항목 검사 (여기에 걸리면 아래 navigate 실행 안 됨)
    if (!name || !email || !password || !phone || !year || !month || !day || !grade || !Class || !studentId) {
      alert('모든 항목을 입력해주세요.');
      return; // 🌟 함수를 여기서 즉시 종료하여 회원가입 페이지에 그대로 남겨둠!
    }

    // 3. 모든 값이 채워졌을 때만 실행되는 가입 완료 구역
    const fullBirthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    
    console.log('회원가입 시도 데이터:', { 
      name, email, password, phone, birthDate: fullBirthDate, grade, Class, studentId
    });
    
    alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
    navigate('/Login'); // 🌟 정상 완료시에만 로그인 페이지로 안전하게 이동
  };

  return (
    <div className="login-page-container">
      <img src="/login.png" alt="background" className="bg-image" />

      <div className="register-card">
        <h2 className="title-font">회원가입</h2>
        
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

          <span>비밀번호 확인</span>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 다시 입력"
            value={passwordConfirm}
            onChange={onChange}
            className="login-input"
          />
        
          <span>이름</span>
          <input
            type="text"
            name="name"
            placeholder="이름 입력"
            value={name}
            onChange={onChange}
            className="login-input"
          />
            <span>전화번호</span>
            <input
                type="tel"
                name="phone"
                placeholder="전화번호 입력"
                value={phone}
                onChange={onChange}
                className="login-input"
            />

          {/* 생년월일 영역 */}
          <span>생년월일</span>
          <div className="birth-date-container">
            <input
              type="text"
              name="year"
              placeholder="년도"
              value={year}
              onChange={onChange}
              className="birth-year"
              maxLength={4}
            />
            {/* 월 선택 */}
            <Select
              options={Array.from({ length: 12 }, (_, i) => ({ value: String(i + 1), label: `${i + 1}월` }))}
              placeholder="월"
              onChange={(selected) => setInputs({ ...inputs, month: selected ? selected.value : '' })}
              className="birth-month"
              classNamePrefix="react-select"
              isSearchable={false}
              styles={{
                menuList: (base) => ({
                  ...base,
                  maxHeight: '210px', /* 6월이 아슬아슬하게 걸쳐 보이도록 조정 */
                  overflowY: 'auto',
                }),
              }}
            />

            {/* 일 선택 */}
            <Select
              options={Array.from({ length: 31 }, (_, i) => ({ value: String(i + 1), label: `${i + 1}일` }))}
              placeholder="일"
              onChange={(selected) => setInputs({ ...inputs, day: selected ? selected.value : '' })}
              className="birth-day"
              classNamePrefix="react-select"
              isSearchable={false}
              styles={{
                menuList: (base) => ({
                  ...base,
                  maxHeight: '210px', /* 일창도 통일감 있게 맞춤 */
                  overflowY: 'auto',
                }),
              }}
            />
          </div>

          {/* 학번 영역 */}
          <span>학번</span>
          <div className="student-info-container">
            <input
              type="number"
              name="grade"
              placeholder="학년"
              value={grade}
              onChange={onChange}
              className="student-input"
            />
            <input
              type="number"
              name="Class"
              placeholder="반"
              value={Class}
              onChange={onChange}
              className="student-input"
            />
            <input
              type="number"
              name="studentId"
              placeholder="학번"
              value={studentId}
              onChange={onChange}
              className="student-input"
            />
          </div>

          {/* 🌟 버튼 제어 구역 (잘못된 onClick 주소 이동을 완전 삭제함) */}
          <div className="button-container">
            <button type="submit" className="register-button main">
              가입하기
            </button>
            <button type="button" className="register-button sub" onClick={() => navigate('/Login')}>
              가입취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;