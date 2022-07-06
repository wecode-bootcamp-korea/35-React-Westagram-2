import React, { useState, useReducer } from 'react';
import Comment from './Comment';

import './Main.scss';
import '../../../styles/reset.scss';

// 검색창 포커스 됬을 경우

const reducer = (state, action) => {
  switch (action.type) {
    case 'create-message':
      const comment = action.payload.comment;
      const newComment = {
        id: Date.now(),
        comment: comment,
        like: false,
      };

      return {
        user: [...state.user, newComment],
      };
    case 'delete-message':
      return {
        user: state.user.filter(comment => comment.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const initialState = {
  user: [],
};

const MainWon = () => {
  const [comment, setComment] = useState('');
  const [commentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="main">
        <nav className="nav">
          <div className="nav-container">
            <div className="nav-container__logo">
              <div className="nav-logo">Westagram</div>
            </div>
            <div className="nav-container__search">
              <div className="search-input">
                <input
                  type="text"
                  id="input"
                  autocomplete="off"
                  className="search-input__input"
                  placeholder="검색"
                />
                <i className="bx bx-search" id="search"></i>
                <i className="bx bxs-x-circle" id="exit"></i>
              </div>
            </div>
            <div className="nav-container__icon">
              <div className="nav-icon">
                <a href="#">
                  <i className="bx bxs-home"></i>
                </a>
              </div>
              <div className="nav-icon">
                <a>
                  <i className="bx bx-paper-plane"></i>
                </a>
              </div>
              <div className="nav-icon">
                <a>
                  <i className="bx bx-plus-circle"></i>
                </a>
              </div>
              <div className="nav-icon">
                <a>
                  <i className="bx bx-compass"></i>
                </a>
              </div>
              <div className="nav-icon">
                <a>
                  <i className="bx bx-heart"></i>
                </a>
              </div>
              <div className="nav-profile__image">
                <a>
                  <img src="./images/wonikChoi/profile/myprofile.jpeg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <section className="section-container">
          <div className="main-container">
            <div className="top-article">
              <div className="top-article__container">
                <div className="top-article__info">
                  <div className="info-image">
                    <img
                      src="./images/wonikChoi/profile/elvis-ray-J-JOGvnfgM8-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info-content">Elvis_lay</div>
                </div>
                <div className="top-article__info">
                  <div className="info-image">
                    <img
                      src="./images/wonikChoi/profile/anh-nguyen-kcA-c3f_3FE-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info-content">cover-vesi</div>
                </div>
                <div className="top-article__info">
                  <div className="info-image">
                    <img
                      src="./images/wonikChoi/profile/marlon-alves-UGNVMLyQKtA-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info-content">malon-alves</div>
                </div>
                <div className="top-article__info">
                  <div className="info-image">
                    <img
                      src="./images/wonikChoi/profile/rick-gebhardt-Hi_FonIcfjk-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info-content">rick_gebhard</div>
                </div>
              </div>
            </div>
            <div className="main-article">
              <div className="main-article__nav">
                <div className="nav-artivle__container">
                  <div className="nav-image">
                    <img
                      src="./images/wonikChoi/profile/marlon-alves-UGNVMLyQKtA-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="nav-title__container">
                    <div className="nav-title">malon-alves</div>
                    <div className="nav-subtitle">commacial</div>
                  </div>
                </div>
                <div className="nav-icon">
                  <i className="bx bx-dots-horizontal-rounded"></i>
                </div>
              </div>
              <div className="main-article__picture">
                <img src="./images/wonikChoi/picture/food1.jpeg" alt="" />
              </div>
              <div className="main-article__heart">
                <div className="heart-container">
                  <div className="heart-icon">
                    <i className="bx bx-heart"></i>
                  </div>
                  <div className="heart-icon">
                    <i className="bx bx-message-rounded"></i>
                  </div>
                  <div className="heart-icon">
                    <i className="bx bx-paper-plane"></i>
                  </div>
                </div>
                <div className="bookmark-container">
                  <div className="heart-icon">
                    <i className="bx bx-bookmark"></i>
                  </div>
                </div>
              </div>
              <div className="main-article__like">
                <div className="like-span">
                  좋아요 <span>1,243</span>개
                </div>
              </div>
              <div className="main-article__description">
                <div className="description-container">
                  <span>
                    <span className="userId">malon-alves </span>Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Voluptatum
                    dignissimos nemo inventore quam nostrum ipsa, doloremque
                    atque repellendus
                  </span>
                </div>
                <div className="description-comment">
                  <div className="comment-left">
                    <div className="user-name">Elvis_lay</div>
                    <span className="user-comment">Good!</span>
                  </div>
                  <div className="comment-right">
                    <i
                      className="bx bx-heart"
                      id="exemple"
                      onclick="like()"
                    ></i>
                  </div>
                </div>
                {commentInfo.user.map(message => {
                  return (
                    <Comment
                      key={message.id}
                      comment={message.comment}
                      id={message.id}
                      dispatch={dispatch}
                    />
                  );
                })}
              </div>
              <div className="timeline">
                <span>1일 전</span>
              </div>
              <form
                className="comment-submit"
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
                <div className="submit-icon">
                  <div className="smile-icon"></div>
                </div>
                <input
                  className="comment-input"
                  type="text"
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder="댓글 달기..."
                />
                <button
                  className="comment-btn"
                  onClick={e => {
                    dispatch({ type: 'create-message', payload: { comment } });
                    setComment('');
                  }}
                >
                  게시
                </button>
              </form>
            </div>
            <div className="main-article">
              <div className="main-article__nav">
                <div className="nav-artivle__container">
                  <div className="nav-image">
                    <img
                      src="./images/wonikChoi/profile/rick-gebhardt-Hi_FonIcfjk-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="nav-title__container">
                    <div className="nav-title">rick_gebhard</div>
                    <div className="nav-subtitle">commacial</div>
                  </div>
                </div>
                <div className="nav-icon">
                  <i className="bx bx-dots-horizontal-rounded"></i>
                </div>
              </div>
              <div className="main-article__picture">
                <img src="./images/wonikChoi/picture/cat.jpeg" alt="" />
              </div>
              <div className="main-article__heart">
                <div className="heart-container">
                  <div className="heart-icon">
                    <i className="bx bx-heart"></i>
                  </div>
                  <div className="heart-icon">
                    <i className="bx bx-message-rounded"></i>
                  </div>
                  <div className="heart-icon">
                    <i className="bx bx-paper-plane"></i>
                  </div>
                </div>
                <div className="bookmark-container">
                  <div className="heart-icon">
                    <i className="bx bx-bookmark"></i>
                  </div>
                </div>
              </div>
              <div className="main-article__like">
                <div className="like-span">
                  좋아요 <span>1,243</span>개
                </div>
              </div>
              <div className="main-article__description">
                <div className="description-container">
                  <span>
                    <span className="userId">rick_gebhard </span>Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Voluptatum
                    dignissimos nemo inventore quam nostrum ipsa, doloremque
                    atque repellendus
                  </span>
                </div>
              </div>
              <div className="timeline">
                <span>1일 전</span>
              </div>
              <form className="comment-submit">
                <div className="submit-icon">
                  <div className="smile-icon"></div>
                </div>
                <input
                  className="comment-input"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="comment-btn" disabled="disabled">
                  게시
                </button>
              </form>
            </div>
            <div className="main-article">
              <div className="main-article__nav">
                <div className="nav-artivle__container">
                  <div className="nav-image">
                    <img
                      src="./images/wonikChoi/profile/myprofile.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="nav-title__container">
                    <div className="nav-title">Yelihi</div>
                  </div>
                </div>
                <div className="nav-icon">
                  <i className="bx bx-dots-horizontal-rounded"></i>
                </div>
              </div>
              <div className="main-article__picture">
                <img src="./images/wonikChoi/picture/my.jpeg" alt="" />
              </div>
              <div className="main-article__heart">
                <div className="heart-container">
                  <div className="heart-icon">
                    <i className="bx bx-heart"></i>
                  </div>
                  <div className="heart-icon">
                    <i className="bx bx-message-rounded"></i>
                  </div>
                  <div className="heart-icon">
                    <i className="bx bx-paper-plane"></i>
                  </div>
                </div>
                <div className="bookmark-container">
                  <div className="heart-icon">
                    <i className="bx bx-bookmark"></i>
                  </div>
                </div>
              </div>
              <div className="main-article__like">
                <div className="like-span">
                  좋아요 <span>1,243</span>개
                </div>
              </div>
              <div className="main-article__description">
                <div className="description-container">
                  <span>
                    <span className="userId">Yelihi </span>위코드 힘들어요..
                  </span>
                </div>
              </div>
              <div className="timeline">
                <span>1일 전</span>
              </div>
              <form className="comment-submit">
                <div className="submit-icon">
                  <div className="smile-icon"></div>
                </div>
                <input
                  className="comment-input"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="comment-btn" disabled="disabled">
                  게시
                </button>
              </form>
            </div>
          </div>
          <div className="main-right">
            <div className="profile-container">
              <div className="profile-left">
                <div className="profile-image">
                  <img src="./images/wonikChoi/profile/myprofile.jpeg" alt="" />
                </div>
                <div className="profile-name">
                  <span className="profile-user">Yelihi</span>
                  <span className="profile-fullname">최원익</span>
                </div>
              </div>
              <div className="profile-right">
                <span>전환</span>
              </div>
            </div>
            <div className="profile-container__separate">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <div className="friends-container">
              <div className="friends">
                <div className="friends-left">
                  <div className="friends-image">
                    <img src="./images/wonikChoi/profile/friend1.jpg" alt="" />
                  </div>
                  <div className="friends-name">
                    <span className="friends-user">realdiegovaldez</span>
                    <span className="friends-sub">인기</span>
                  </div>
                </div>
                <div className="friends-right">
                  <span className="follow">팔로우</span>
                </div>
              </div>
              <div className="friends">
                <div className="friends-left">
                  <div className="friends-image">
                    <img src="./images/wonikChoi/profile/friend2.jpg" alt="" />
                  </div>
                  <div className="friends-name">
                    <span className="friends-user">khloekardashian</span>
                    <span className="friends-sub">인기</span>
                  </div>
                </div>
                <div className="friends-right">
                  <span className="follow">팔로우</span>
                </div>
              </div>
              <div className="friends">
                <div className="friends-left">
                  <div className="friends-image">
                    <img src="./images/wonikChoi/profile/friend3.jpg" alt="" />
                  </div>
                  <div className="friends-name">
                    <span className="friends-user">simonettalein</span>
                    <span className="friends-sub">인기</span>
                  </div>
                </div>
                <div className="friends-right">
                  <span className="follow">팔로우</span>
                </div>
              </div>
              <div className="friends">
                <div className="friends-left">
                  <div className="friends-image">
                    <img src="./images/wonikChoi/profile/friend4.jpg" alt="" />
                  </div>
                  <div className="friends-name">
                    <span className="friends-user">therock</span>
                    <span className="friends-sub">인기</span>
                  </div>
                </div>
                <div className="friends-right">
                  <span className="follow">팔로우</span>
                </div>
              </div>
              <div className="friends">
                <div className="friends-left">
                  <div className="friends-image">
                    <img src="./images/wonikChoi/profile/friend6.jpg" alt="" />
                  </div>
                  <div className="friends-name">
                    <span className="friends-user">kyliejenner</span>
                    <span className="friends-sub">인기</span>
                  </div>
                </div>
                <div className="friends-right">
                  <span className="follow">팔로우</span>
                </div>
              </div>
            </div>
            <div className="description">
              <span>
                소개&#183;도움말&#183;홍보
                센터&#183;API&#183;채용정보&#183;개인정보처리방침&#183;약관&#183;위치&#183;언어
              </span>
            </div>
            <div className="copyright">
              <span>© 2022 INSTAGRAM FROM META</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainWon;
