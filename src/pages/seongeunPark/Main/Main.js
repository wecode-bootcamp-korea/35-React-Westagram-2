import React, { useState } from 'react';
// import React from 'react';
import './Main.scss';
// import "../../style/reset.css"
// import '../../../styles/common.scss';
// import '../../../components/Nav/Comment.js';
import Comment from '../../../components/Nav/Comment.js';

function Main() {
  const [commentValue, setCommentValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  const newCommnet = ({ target }) => {
    setCommentValue(target.value);
  };

  const commentCondition = e => {
    if (commentValue.length > 0 && (e.key === 'Enter' || e.type === 'click')) {
      setCommentList([...commentList, commentValue]);
      setCommentValue('');
    }
  };

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
          <div className="feeds">
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
              <div className="likes-comments">
                <div className="likes-comments_likes">
                  <img
                    className="profile-img"
                    src="../../images/seongeunPark/IMG_6408 (1).png"
                    alt="who press a heart icon"
                  />
                  <p className="likes-info">
                    <span className="likes_user-name">seal</span>님 외{' '}
                    <span className="likes-user-number">10</span>명이 좋아합니다
                  </p>
                </div>

                <div className="comments">
                  <div className="comments-comment">
                    <div className="comment">
                      <span className="comment_user-name main-user">
                        kookybrown
                      </span>
                      <p className="comment_content">숯덩어리🖤</p>
                      <span className="comment-more">더 보기</span>
                    </div>
                  </div>

                  <div className="comments-comment">
                    <div className="comment">
                      <span className="comment_user-name">neceosecius</span>
                      <p className="comment_content">너무 귀엽당</p>
                    </div>
                    <i className="far fa-heart empty" />
                  </div>

                  <Comment commentList={commentList} />
                  {/* <div>
                    {commentList.map(function (a, i) {
                      return (
                        <div className="comments-comment">
                          <div className="comment">
                            <span className="comment_user-name">
                              neceosecius
                            </span>
                            <p className="comment_content" key={i}>
                              {a}
                            </p>
                          </div>
                          <i className="far fa-heart empty"></i>
                        </div>
                      );
                    })}
                  </div> */}
                </div>

                <span className="comments-time">50초 전</span>
              </div>

              <div className="input-box">
                <input
                  className="input-comments"
                  placeholder="댓글 달기..."
                  onChange={newCommnet}
                  onKeyUp={commentCondition}
                  value={commentValue}
                />
                <button
                  type="submit"
                  onClick={commentCondition}
                  className="comments-btn"
                >
                  게시
                </button>
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
