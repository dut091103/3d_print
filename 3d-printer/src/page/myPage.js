import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './myPage.css';
function MyPage() {
    const navigate = useNavigate();
    return (
        <>
        <div className="main-title">
            <img src="/mypage.png" alt="My Page" className="my-header" />
            <span className="title-font">마이페이지</span>
        </div>
        <div className="profile">
            dlld
        </div>
        {/* <div className="profile">
            <img src="/profile.png" alt="Profile" className="profile-image" />
            <h2>홍 길 동</h2>
            <p>서울로봇고등학교 3학년</p>
        </div> */}
        </>
    );
}
export default MyPage;