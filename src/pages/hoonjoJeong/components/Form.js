import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const validation = () => {
    return id.includes('@') && id.length > 5 && pw.length > 5;
  };

  const idValue = e => {
    setId(e.target.value);
  };

  const pwValue = e => {
    setPw(e.target.value);
  };

  const goToMain = () => {
    navigate('/main-hoon');
  };

  return (
    <form className="login__box__form" onSubmit={goToMain}>
      <input
        onChange={idValue}
        type="text"
        className="login__box__form__id"
        name="id"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={pwValue}
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
