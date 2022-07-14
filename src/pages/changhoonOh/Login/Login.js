import Footer from '../../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../../styles/reset.scss';
import './Login.scss';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [canIPass, canYouPass] = useState(true);

  const handleIdInput = event => {
    setId(event.target.value);
  };
  const handlePwInput = event => {
    setPw(event.target.value);
  };

  // const [values, setValues] = useState({
  //   userId: '',
  //   userPw: '',
  //   canIpass: true,
  // });

  // const handleInput = e => {
  //   const { name, value } = e.target;
  //   setValues(prevValues => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };

  const validation = () => {
    return id.includes('@') && pw.length >= 5
      ? canYouPass(false)
      : canYouPass(true);
  };

  const navigate = useNavigate();

  const goToMain = e => {
    e.preventDefault();
    return navigate('../Main/Main');
  };

  return (
    <main className="login">
      <section>
        <div className="leftPanel" />
        <div className="rightPanel">
          <div className="rightTop">
            <h1 className="logo">Instagram</h1>
            <form className="signIn" onKeyUp={validation} onSubmit={goToMain}>
              <input
                className="id"
                name="userId"
                onChange={handleIdInput}
                onkeyup={validation}
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="pw"
                name="userPw"
                onChange={handlePwInput}
                type="password"
                placeholder="비밀번호"
              />
              <button
                className={'loginBtn' + (canIPass ? 'Off' : 'On')}
                type="submit"
                disabled={canIPass}
              >
                로그인
              </button>
              <span className="horizontalLine">
                ────────&nbsp;&nbsp;&nbsp;&nbsp;또는&nbsp;&nbsp;&nbsp;&nbsp;────────
              </span>
              <a className="loginFacebook" href="https://www.google.com/">
                <i className="fab fa-facebook-square" /> Facebook으로 로그인
              </a>
              <a className="forgotPassword" href="https://www.google.com/">
                비밀번호를 잊으셨나요?
              </a>
            </form>
          </div>
          <div className="signUp">
            <span>계정이 없으신가요?</span>
            <a href="https://www.google.com/">가입하기</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Login;
