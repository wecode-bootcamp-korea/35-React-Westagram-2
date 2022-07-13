export const Link = () => {
  return (
    <>
      <p className="login__text">또는</p>
      <a href="/main" className="login__link">
        <i className="fab fa-facebook">
          <p>Facebook으로 로그인</p>
        </i>
      </a>
      <a href="/main" className="login__link">
        비밀번호를 잊으셨나요?
      </a>
    </>
  );
};

export const Signup = () => {
  return (
    <div className="signup__box inner-box">
      <p>
        계정이 없으신가요? <a href="/main">가입하기</a>
      </p>
    </div>
  );
};

export const Download = () => {
  return (
    <div className="download-box">
      <p>앱을 다운로드 하세요.</p>
      <div className="download-box__s">
        <div className="download-box__link">
          <div className="download-box__link__store">
            <div className="app-store">
              <i className="fab fa-apple" />
            </div>
            <div className="store-text">
              <span>App Store에서</span>
              <span>다운로드 하기</span>
            </div>
          </div>
        </div>
        <div className="download-box__link">
          <div className="download-box__link__store">
            <div className="play-store">
              <i className="fab fa-google-play" />
            </div>
            <div className="store-text">
              <span>다운로드하기</span>
              <span>Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
