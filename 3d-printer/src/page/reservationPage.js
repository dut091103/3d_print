import React from 'react';
import { useNavigate } from 'react-router-dom';
import './reservationPage.css';

function ReservationPage() {
    const navigate = useNavigate();
    return (
        <div className="res-title">
            <img src="/res.png" alt="R" className="r-image" /> 
            <h1>예약 페이지</h1>
        </div>
    );
}


export default ReservationPage;