import React, { useState } from 'react'; 
import './mainPage.css'; 
import { useNavigate } from 'react-router-dom';

function MainPage({ printerStates, setPrinterStates }) {
  const navigate = useNavigate();

  // 클릭한 프린터(index)의 상태만 반대로 뒤집는 함수
  const handleUseClick = (index) => {
    const newStates = [...printerStates];
    newStates[index] = !newStates[index];
    setPrinterStates(newStates);
  };

  return (
    <>
      {/* 1. 상단 배너 영역 */}
      <div className="main-title">
        <img src="/main.png" alt="M" className="m-image" />
        <div className="title-font">우리 학교 3D 프린터를<br /> 한 곳에서.</div>
      </div>

      {/* 2. 중앙 컨테이너 영역 */}
      <div className="main-container">
        <div className="title-row">
          <p className="title-font">프린터 상태 표시</p>
          <button type="button" className="res-button" onClick={() => navigate('/Reservation')}>
            예약 바로 가기 &gt;
          </button>
        </div>

        {/* 3. 3D 프린터 상태 박스 */}
        <div className="status-container">
          <p>2층 소프트웨어 3D프린터</p>
          <hr/>
          
          {/* 🚀 [최신 반응형 구조] 이미지와 버튼이 세트로 묶여 4개가 정렬되는 영역 */}
          <div className="image-container-new">
            {printerStates.map((state, index) => (
              <div key={index} className="printer-card">
                <img 
                  src={state ? "/Available.png" : "/In_Use.png"} 
                  alt={state ? "사용 가능" : "사용 불가"} 
                  className="status-img-new" 
                />
                <button 
                  type="button"
                  onClick={() => handleUseClick(index)}
                  className={`status-button-new ${state ? 'available' : 'unavailable'}`}
                >
                  {state ? '사용하기' : '사용 불가'}
                </button>
              </div>
            ))}
          </div>

          {/* 💡 화면 혼선을 주던 기존 옛날 중복 코드들은 에러 예방을 위해 완벽히 주석 처리했습니다. */}
          {/* <div className="image-container-old">
            {isAvailable ? (
              <>
                <img src="/Available.png" alt="사용 가능" className="status-img" />
                <img src="/Available.png" alt="사용 가능" className="status-img" />
                <img src="/Available.png" alt="사용 가능" className="status-img" />
                <img src="/Available.png" alt="사용 가능" className="status-img" />
              </>
            ) : (
              <>
                <img src="/In_Use.png" alt="사용 불가" className="status-img" />
                <img src="/In_Use.png" alt="사용 불가" className="status-img" />
                <img src="/In_Use.png" alt="사용 불가" className="status-img" />
                <img src="/In_Use.png" alt="사용 불가" className="status-img" />
              </>
            )}
          </div>

          <button 
            onClick={() => handleUseClick(0)}
            className={`status-button ${isAvailable ? 'available' : 'In_Use'} old-btn-hidden`}
          >
            {isAvailable ? '사용하기' : '사용 불가'}
          </button>
          */}

        </div>
      </div>
    </>
  );
}

export default MainPage;