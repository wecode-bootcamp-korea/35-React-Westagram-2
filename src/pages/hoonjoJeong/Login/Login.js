import Phone from '../components/Phone';
import Form from '../components/Form';
import { Link, Signup, Download } from '../components/Link';
import './Login.scss';

function LoginHoon() {
  return (
    <main className="container">
      <Phone />
      <div className="login-parents">
        <div className="login-box inner-box">
          <p className="login__box__logo">westagram</p>
          <Form />
          <Link />
        </div>
        <Signup />
        <Download />
      </div>
    </main>
  );
}

export default LoginHoon;
