import React, { useState } from 'react'; // { useState } 추가
import './mainPage.css'; // 메인페이지 전용 CSS가 필요하다면 생성
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();
  // 💡 4개 프린터의 상태를 배열로 관리 (true: 사용 가능, false: 사용 중)
  const [printerStates, setPrinterStates] = useState([true, true, true, true]);
  // 💡 클릭한 프린터(index)의 상태만 반대로 뒤집는 함수
  const handleUseClick = (index) => {
    const newStates = [...printerStates];
    newStates[index] = !newStates[index];
    setPrinterStates(newStates);
  };
  
  // 임시로 기존 에러를 방지하기 위해 첫 번째 프린터의 상태를 대표로 정의해 둡니다.
  const isAvailable = printerStates[0];

  return (
    <>
    <div className="main-title">
      <img src="/main.png" alt="M" className="m-image" />
      <span className="title-font">우리 학교 3D 프린터를<br /> 한 곳에서.</span>
    </div>
    <div className="main-container">
      <div className="title-row">
        <p className="title-font">프린터 상태 표시</p>
        <button type="button" className="res-button" onClick={() => navigate('/reservation')}>
          예약 바로 가기 &gt;
        </button>
      </div>
      <div className="status-container">
        <p>2층 소프트웨어 3D프린터</p>
        <hr/>
        
        {/* 🚀 [추가된 코드] 이미지와 버튼이 개별적으로 짝을 이뤄 4개가 나오는 영역 (CSS 분리 완료) */}
        <div className="image-container-new">
          {printerStates.map((state, index) => (
            <div key={index} className="printer-card">
              <img 
                src={state ? "/Available.png" : "/In_Use.png"} 
                alt={state ? "사용 가능" : "사용 불가"} 
                className="status-img-new" 
              />
              <button 
                onClick={() => handleUseClick(index)}
                className={`status-button-new ${state ? 'available' : 'unavailable'}`}
              >
                {state ? '사용하기' : '사용 불가'}
              </button>
            </div>
          ))}
        </div>

        {/* ⚠️ 아래는 기존 구조 유지를 위해 주석과 코드를 건들지 않은 영역입니다 */}
        <div className="image-container-old">
          {isAvailable ? (
            /* 사용 가능(true) 상태일 때 보여줄 이미지 4개 조합 */
            <>
              <img src="/Available.png" alt="사용 가능" className="status-img" />
              <img src="/Available.png" alt="사용 가능" className="status-img" />
              <img src="/Available.png" alt="사용 가능" className="status-img" />
              <img src="/Available.png" alt="사용 가능" className="status-img" />
            </>
          ) : (
            /* 사용 불가(false) 상태일 때 보여줄 이미지 4개 조합 (원하는 주소로 변경 가능) */
            <>
              <img src="/In_Use.png" alt="사용 불가" className="status-img" />
              <img src="/In_Use.png" alt="사용 불가" className="status-img" />
              <img src="/In_Use.png" alt="사용 불가" className="status-img" />
              <img src="/In_Use.png" alt="사용 불가" className="status-img" />
            </>
          )}
        </div>

        {/* 2. 상태(isAvailable)에 따라 버튼의 클래스명을 다르게 부여 */}
        {/* 화면 혼선을 막기 위해 임시 숨김 처리 */}
        <button 
          onClick={() => handleUseClick(0)}
          className={`status-button ${isAvailable ? 'available' : 'In_Use'} old-btn-hidden`}
        >
          {isAvailable ? '사용하기' : '사용 불가'}
        </button>

        {/* <div className="asset-container"> */}
          {/* <h2>시설/자산 상태 변경</h2> */}

      </div>
      </div>
      
    </>
  );
}

export default MainPage;