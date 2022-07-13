import Footer from '../../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import '../../../styles/reset.scss';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('../Main/Main');
  };

  return (
    <main className="loginMaster">
      <section>
        <div className="leftPanel" />
        <div className="rightPanel">
          <div className="rightTop">
            <h1 className="logo">Instagram</h1>
            <form className="signIn">
              <input
                className="id"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input className="pw" type="password" placeholder="비밀번호" />
              <button className="loginBtn" type="submit" onClick={goToMain}>
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
