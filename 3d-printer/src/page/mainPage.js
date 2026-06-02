import React from 'react';
import './mainPage.css'; // 메인페이지 전용 CSS가 필요하다면 생성

function MainPage() {
  return (
    <div className="main-page-container">
        <img src="/main.png" alt="main background" id="main-image" />
    </div>
  );
}

export default MainPage;