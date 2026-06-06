import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Notification.css';

function Notification() {
  const navigate = useNavigate();
  const [alarmOn, setAlarmOn] = useState(false);

  return (
    <div className="noti-page">

      {/* 사이드바 */}
      <div className="setting-sidebar">
        <div className="setting-title">
          <span>⚙️</span>
          <span className="setting-title-text">설정</span>
        </div>
        <nav className="setting-nav">
          <div className="setting-nav-item" onClick={() => navigate('/settings')}>계정</div>
          <div className="setting-nav-item active">알림</div>
        </nav>
      </div>

      {/* 콘텐츠 */}
      <div className="noti-content">
        <h2 className="noti-section-title">알림</h2>
        <hr className="noti-divider" />

        <h3 className="noti-sub-title">알림 키기/끄기</h3>

        <div className="noti-item">
          <span className="noti-label">알림 키기/끄기</span>
          <div
            className={`toggle ${alarmOn ? 'on' : ''}`}
            onClick={() => setAlarmOn(!alarmOn)}
          >
            <div className="toggle-circle" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Notification;