import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './setting.css';

function Setting() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('계정');
  const [showModal, setShowModal] = useState(false);  // ← 추가

  return (
    <div className="setting-page">

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

      {/* 콘텐츠 영역 */}
      <div className="setting-content">

        {activeMenu === '계정' && (
          <>
            <h2 className="section-title">계정</h2>
            <hr className="section-divider" />

            {/* 로그인 정보 */}
            <h3 className="sub-title">로그인 정보</h3>
            <div className="setting-item" onClick={() => navigate('/email-change')}>
                <span>이메일 변경/확인</span>
                <img src="/arrow.svg" alt="arrow" className="arrow-img" />
            </div>
            <div className="setting-item" onClick={() => navigate('/password-change')}>
                <span>비밀번호 변경</span>
                <img src="/arrow.svg" alt="arrow" className="arrow-img" />
            </div>

            {/* 계정 정보 */}
            <h3 className="sub-title">계정 정보</h3>
            <div className="setting-item">
              <span>가입일</span>
              <span className="divider-bar">|</span>
              <span className="info-value">2026년 5월 7일</span>
            </div>
            <div className="setting-item">
              <span>가입 방법</span>
              <span className="divider-bar">|</span>
              <span className="info-value">이메일</span>
            </div>

            {/* 로그아웃/회원 탈퇴 */}
            <h3 className="sub-title">로그아웃/회원 탈퇴</h3>
            <div className="setting-item" onClick={() => navigate('/')}>
              <span>로그아웃</span>
              <img src="/arrow.svg" alt="arrow" className="arrow-img" />
            </div>
            {/* 회원 탈퇴 버튼 */}
            <div className="setting-item danger" onClick={() => setShowModal(true)}>
                <span>회원 탈퇴</span>
                <img src="/arrow.svg" alt="arrow" className="arrow-img" />
            </div>
            {/* 팝업 모달 */}
            {showModal && (
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
                <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="modal-icon">🗑️</div>
                <p className="modal-title">정말 회원 탈퇴 하시겠습니까?</p>
                <p className="modal-desc">탈퇴시, 계정은 삭제되며<br/>복구되지 않습니다.</p>
                <button className="modal-btn confirm" onClick={() => alert('탈퇴 처리')}>확인</button>
                <button className="modal-btn cancel" onClick={() => setShowModal(false)}>취소</button>
                </div>
            </div>
            )}
          </>
        )}

        {activeMenu === '알림' && (
          <>
            <h2 className="section-title">알림</h2>
            <hr className="section-divider" />
            <h3 className="sub-title">알림 설정</h3>
            <div className="setting-item">
              <span>프린트 완료 알림</span>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="setting-item">
              <span>예약 알림</span>
              <input type="checkbox" />
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Setting;