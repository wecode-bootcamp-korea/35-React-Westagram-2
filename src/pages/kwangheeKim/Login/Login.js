import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginKwang() {
  const [userid, setuserid] = useState('');
  const [userpw, setuserpw] = useState('');

  const isActive = userid.includes('@') && userpw.length >= 5 ? true : false;

  const navigate = useNavigate();
  const goToMain = () => {
    // fetch('http://10.58.3.203:8000/users/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: userid,
    //     password: userpw,
    //     name: 'kkh',
    //     phone_number: '010-1234-5678',
    //     others: '',
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => (result.access_token ? navigate('/main-kwang') : null()));
    isActive ? navigate('/main-kwang') : null();
  };

  const idonChange = e => {
    setuserid(e.target.value);
  };
  const pwonChange = e => {
    setuserpw(e.target.value);
  };

  return (
    <div id="loginscreen">
      <h1>westagram</h1>
      <input
        name="userid"
        type="text"
        id="userName"
        value={userid}
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={idonChange}
        onKeyPress={e => {
          e.key === 'Enter' ? goToMain() : null();
        }}
      />
      <input
        name="userpw"
        type="password"
        id="userPassword"
        value={userpw}
        placeholder="비밀번호"
        onChange={pwonChange}
        onKeyPress={e => {
          e.key === 'Enter' ? goToMain() : null();
        }}
      />
      <button
        type="button"
        className={isActive ? 'activeBtn' : 'unactiveBtn'}
        onClick={goToMain}
        disabled={!isActive}
      >
        로그인
      </button>
      <p className="missingpw">비밀번호를 잊으셨나요?</p>
    </div>
  );
}

export default LoginKwang;
