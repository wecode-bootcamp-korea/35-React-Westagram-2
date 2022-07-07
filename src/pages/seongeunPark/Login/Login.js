import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seong');
  };

  return (
    <div className="login-container">
      <div className="login">
        <Link to="/main-seong">
          <h1 className="login-title">Westagram</h1>
        </Link>
        <div className="login-info">
          <div className="login-input">
            <input
              className="login-id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="login-password"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <button className="login-btn" onClick={goToMain}>
            로그인
          </button>
        </div>
        <p className="finding-password">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default Login;
