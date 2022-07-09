import React from 'react';
// import React from 'react';
import './Main.scss';
// import "../../style/reset.css"
// import '../../../styles/common.scss';
// import '../../../components/Nav/Comment.js';
import Comment from '../../../components/Nav/Comment.js';

function Main() {
  return (
    <>
      <nav>
        <div className="nav-left">
          <i className="fab fa-instagram fa-2x" />
          <div className="nav-vertical-line" />
          <h1 className="main-title">Westagram</h1>
        </div>
        <div className="nav-search">
          <input type="text" className="nav-search_input" />
          <i className="fas fa-search" />
          <span className="nav-search_word">검색</span>
        </div>
        <div className="nav-right">
          <i className="fas fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
          <div className="red-dot" />
        </div>
      </nav>
      <main>
        <div className="main-left-right">
          <div class="feeds-container">
            <div className="feeds">
              <div className="feeds-header">
                <div className="profile">
                  <div className="profile-info">
                    <h1 className="profile-header_name">wecode_bootcamp</h1>
                    <p className="profile-header_description">
                      Wecode - 위코드
                    </p>
                  </div>
                  <img
                    className="profile-img"
                    src="../../images/seongeunPark/IMG_4764.jpg"
                    alt="profile"
                  />
                </div>
                <div className="feeds-header_right">
                  <i className="fas fa-ellipsis-h" />
                </div>
              </div>
              <div className="feed-img">
                <img
                  src="../../images/seongeunPark/chihiro014.jpg"
                  alt="charcoal"
                />
              </div>
              <div className="feeds-function-comments">
                <div className="feeds-function">
                  <div className="feeds-function_left">
                    <i className="fas fa-heart fa-lg " />
                    <i className="far fa-comment fa-lg" />
                    <i className="fas fa-upload fa-lg" />
                  </div>
                  <div className="feeds-function_right">
                    <i className="fas fa-bookmark fa-lg" />
                  </div>
                </div>
                <Comment />
              </div>
            </div>

            <div className="feeds">
              <div className="feeds-header">
                <div className="profile">
                  <div className="profile-info">
                    <h1 className="profile-header_name">wecode_bootcamp</h1>
                    <p className="profile-header_description">
                      Wecode - 위코드
                    </p>
                  </div>
                  <img
                    className="profile-img"
                    src="../../images/seongeunPark/IMG_4764.jpg"
                    alt="profile"
                  />
                </div>
                <div className="feeds-header_right">
                  <i className="fas fa-ellipsis-h" />
                </div>
              </div>
              <div className="feed-img">
                <img
                  src="../../images/seongeunPark/chihiro014.jpg"
                  alt="charcoal"
                />
              </div>
              <div className="feeds-function-comments">
                <div className="feeds-function">
                  <div className="feeds-function_left">
                    <i className="fas fa-heart fa-lg " />
                    <i className="far fa-comment fa-lg" />
                    <i className="fas fa-upload fa-lg" />
                  </div>
                  <div className="feeds-function_right">
                    <i className="fas fa-bookmark fa-lg" />
                  </div>
                </div>
                <Comment />
              </div>
            </div>
          </div>

          <div className="main-right">
            <div className="feeds-header">
              <div className="profile">
                <div className="profile-info">
                  <h1 className="profile-header_name">wecode_bootcamp</h1>
                  <p className="profile-header_description">Wecode - 위코드</p>
                </div>
                <img
                  className="profile-img"
                  src="../../images/seongeunPark/IMG_4764.jpg"
                  alt="profile"
                />
              </div>
            </div>
            <div className="stories">
              <div className="story-menu">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <div className="story">
                <div className="profile">
                  <div className="profile-info">
                    <h1 className="profile-header_name">wecode_bootcamp</h1>
                    <p className="profile-header_description">
                      Wecode - 위코드
                    </p>
                  </div>
                  <img
                    className="profile-img"
                    src="../../images/seongeunPark/calcifer.jpeg"
                    alt="profile"
                  />
                </div>
                <div className="profile">
                  <div className="profile-info">
                    <h1 className="profile-header_name">wecode_bootcamp</h1>
                    <p className="profile-header_description">
                      Wecode - 위코드
                    </p>
                  </div>
                  <img
                    className="profile-img"
                    src="../../images/seongeunPark/calcifer.jpeg"
                    alt="profile"
                  />
                </div>
                <div className="profile">
                  <div className="profile-info">
                    <h1 className="profile-header_name">wecode_bootcamp</h1>
                    <p className="profile-header_description">
                      Wecode - 위코드
                    </p>
                  </div>
                  <img
                    className="profile-img"
                    src="../../images/seongeunPark/calcifer.jpeg"
                    alt="profile"
                  />
                </div>
                <div className="profile">
                  <div className="profile-info">
                    <h1 className="profile-header_name">wecode_bootcamp</h1>
                    <p className="profile-header_description">
                      Wecode - 위코드
                    </p>
                  </div>
                  <img
                    className="profile-img"
                    src="../../images/seongeunPark/calcifer.jpeg"
                    alt="profile"
                  />
                </div>
              </div>
            </div>
            <div div className="offers">
              <div className="offer-menu">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <div className="offer">
                <div className="offer-user">
                  <div className="profile">
                    <div className="profile-container">
                      <div className="profile-info">
                        <h1 className="profile-header_name">wecode_bootcamp</h1>
                        <p className="profile-header_description">
                          Wecode - 위코드
                        </p>
                      </div>
                      <img
                        className="profile-img"
                        src="../../images/seongeunPark/kiki.jpeg"
                        alt="profile"
                      />
                    </div>
                    <button className="follow-btn">팔로우</button>
                  </div>
                  <div className="offer-user">
                    <div className="profile">
                      <div className="profile-container">
                        <div className="profile-info">
                          <h1 className="profile-header_name">
                            wecode_bootcamp
                          </h1>
                          <p className="profile-header_description">
                            Wecode - 위코드
                          </p>
                        </div>
                        <img
                          className="profile-img"
                          src="../../images/seongeunPark/kiki.jpeg"
                          alt="profile"
                        />
                      </div>
                      <button className="follow-btn">팔로우</button>
                    </div>
                    <div className="offer-user">
                      <div className="profile">
                        <div className="profile-container">
                          <div className="profile-info">
                            <h1 className="profile-header_name">
                              wecode_bootcamp
                            </h1>
                            <p className="profile-header_description">
                              Wecode - 위코드
                            </p>
                          </div>
                          <img
                            className="profile-img"
                            src="../../images/seongeunPark/kiki.jpeg"
                            alt="profile"
                          />
                        </div>
                        <button className="follow-btn">팔로우</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
