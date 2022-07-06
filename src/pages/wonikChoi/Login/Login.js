import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import '../../../styles/reset.scss';

// 로그인 부분 사진 변동시키기

const LoginWon = () => {
  const [number, setNumber] = useState(1);
  const [valueId, setValueId] = useState('');
  const [valuePw, setValuePw] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [focus, setFocus] = useState('');
  const interval = useRef();
  const navigate = useNavigate();

  const cycleImage = () => {
    if (number === 1) {
      setNumber(2);
    } else if (number === 2) {
      setNumber(3);
    } else if (number === 3) {
      setNumber(1);
    }
  };

  useEffect(() => {
    interval.current = setInterval(cycleImage, 3000);
    console.log('시작');
    return () => {
      console.log('끝');
      clearInterval(interval.current);
    };
  }, [number]);

  const onChangeId = e => {
    setValueId(e.target.value);
  };

  const onChangePw = e => {
    setValuePw(e.target.value);
  };

  const onkey = e => {
    const valueArr = valueId.split('');
    if (valueArr.some(elm => elm === '@') && valuePw.length > 5) {
      setDisabled(false);
      setFocus('focus');
    } else {
      setDisabled(true);
      setFocus('');
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    navigate('/main-won');
  };

  return (
    <>
      <div className="login">
        <main className="container">
          <article className="container-center">
            <div className="background_image">
              <div className="image-container">
                <img
                  className="image active"
                  src={`./images/wonikChoi/cover-instagram${number}.png`}
                />
                <img
                  className="image active"
                  src={`./images/wonikChoi/cover-instagram${number}.png`}
                />
                <img
                  className="image active"
                  src={`./images/wonikChoi/cover-instagram${number}.png`}
                />
              </div>
            </div>
            <div className="login-container">
              <div className="login-container__input">
                <div className="login-logo">
                  <span>Westagram</span>
                </div>
                <form
                  onKeyUp={onkey}
                  onSubmit={onSubmit}
                  action=""
                  className="login-input"
                >
                  <input
                    type="text"
                    className="login-input__ID"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    value={valueId}
                    onChange={onChangeId}
                  />
                  <input
                    type="password"
                    className="login-input__PW"
                    placeholder="비밀번호"
                    value={valuePw}
                    onChange={onChangePw}
                  />
                  <button
                    type="submit"
                    className={`login-button ${focus}`}
                    disabled={disabled}
                  >
                    로그인
                  </button>
                </form>
                <div className="login-separate">
                  <div className="login-separate__line"></div>
                  <div className="login-separate__span">또는</div>
                  <div className="login-separate__line"></div>
                </div>
                <div className="login-facebook">
                  <div className="login-facebook__img"></div>
                  <span>Facebook으로 로그인</span>
                </div>
                <div className="login-lostPassword">
                  <span>비밀번호를 잊으셨나요?</span>
                </div>
              </div>
              <div className="login-container__inroll">
                <div className="login-inroll__span">
                  <p>계정이 없으신가요?</p>
                  <span>가입하기</span>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default LoginWon;
