import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const updateId = ({ target }) => {
    const idValue = target.value;
    setId(idValue);
  };

  const updatePwd = ({ target }) => {
    const pwdValue = target.value;
    setPwd(pwdValue);
  };

  const loginCondition = id.includes('@') && pwd.length > 4;

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
              onChange={updateId}
            />
            <input
              className="login-password"
              type="password"
              placeholder="비밀번호"
              onChange={updatePwd}
            />
          </div>
          <button
            disabled={!loginCondition}
            className={'login-btn'}
            style={
              loginCondition
                ? { backgroundColor: '#4da5fd' }
                : { backgroundColor: '#c5e0fb' }
            }
            onClick={goToMain}
          >
            로그인
          </button>
        </div>
        <p className="finding-password">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default Login;
