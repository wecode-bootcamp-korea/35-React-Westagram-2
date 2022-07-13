import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '정훈조',
    mobile_number: '01043552450',
  });

  const goToMain = () => navigate('/main-hoon');

  const handleInput = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validation = () => {
    const emailRegExp =
      /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const passwordRegExp =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    return (
      emailRegExp.test(values.email) && passwordRegExp.test(values.password)
    );
  };

  const Login = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://fdsjklfdjshklf.com', {
        method: 'POST',
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          name: values.name,
          mobile_number: values.mobile_number,
        }),
      });
      if (response.token) {
        const result = response.json();
        localStorage.setItem('access_token', result.token);
        goToMain();
      }
    } catch (err) {
      alert('ERROR');
    }
  };

  return (
    <form className="login__box__form" onSubmit={Login}>
      <input
        onChange={handleInput}
        type="text"
        className="login__box__form__id"
        name="email"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={handleInput}
        type="password"
        className="login__box__form__pw"
        name="password"
        placeholder="비밀번호"
      />
      <button
        type="submit"
        className={
          validation()
            ? 'login__box__form__submit_p'
            : 'login__box__form__submit'
        }
        disabled={!validation()}
      >
        로그인
      </button>
    </form>
  );
};

export default Form;
