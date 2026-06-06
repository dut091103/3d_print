import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './reservationPage.css';

function ReservationPage({ printerStates, setPrinterStates }) {
  console.log('printerStates:', printerStates); // 이게 정확히 여기 있어야 해요
  const navigate = useNavigate();
    // const [printerStates, setPrinterStates] = useState([true, true, true, true]);
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
        <div className="res-title">
            <img src="/res.png" alt="R" className="r-image" /> 
            <p className="title-font res-font">모든 예약은 이곳에서 하세요.</p>
            <hr/>
        </div>
        <div className="main-container">
            <div className="title-row">
                <p className="title-font">예약</p>
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



            </div>
        </div>
        </>
    );
}


export default ReservationPage;