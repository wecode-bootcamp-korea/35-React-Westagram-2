import React, { useState } from 'react';
import CommentList from './CommentList';
import './Main.scss';

function MainKwang() {
  const [userName] = useState('kkh');
  const [commentinput, setcommentinput] = useState('');
  const [commentlist, setcommentlist] = useState([]);

  const commentonChange = e => {
    setcommentinput(e.target.value);
  };

  const writecomment = e => {
    const copycomments = [...commentlist];
    copycomments.push(commentinput);
    setcommentlist(copycomments);
    setcommentinput('');
  };

  return (
    <div id="mainscreen">
      <nav id="mainnav">
        <div>
          <img
            src="/images/kwangheeKim/instagram.png"
            className="navLogo"
            alt=""
          />
          <h2>westagram</h2>
        </div>
        <div>
          <img
            src="/images/kwangheeKim/search.png"
            className="searchIcon"
            alt=""
          />
          <input
            type="text"
            className="mainSearch"
            defaultValue=""
            placeholder="검색"
          />
        </div>
        <div>
          <img
            src="/images/kwangheeKim/explore.png"
            className="navIcon"
            alt=""
          />
          <img src="/images/kwangheeKim/heart.png" className="navIcon" alt="" />
          <img
            src="/images/kwangheeKim/profile.png"
            className="navIcon navProfile"
            alt=""
          />
        </div>
      </nav>

      <div id="main">
        <div className="feeds">
          <article className="post1">
            <div className="postTop">
              <div>
                <img
                  src="/images/kwangheeKim/profile.png"
                  className="postFrofile"
                  alt=""
                />
                <span>
                  <b id="Bold">canon_mj</b>
                </span>
              </div>
              <img
                src="/images/kwangheeKim/more.png"
                className="postmore"
                alt=""
              />
            </div>
            <div className="postMid">
              <img src="/images/kwangheeKim/pic1.jpg" alt="" />
            </div>
            <div className="postBot">
              <div className="postIconDiv">
                <div>
                  <img
                    src="/images/kwangheeKim/redheart.png"
                    className="botIcon"
                    alt=""
                  />
                  <img
                    src="/images/kwangheeKim/chat.png"
                    className="botIcon"
                    alt=""
                  />
                  <img
                    src="/images/kwangheeKim/upload.png"
                    className="botIcon"
                    alt=""
                  />
                </div>
                <img
                  src="/images/kwangheeKim/bookmark.png"
                  className="botIcon"
                  alt=""
                />
              </div>
              <p>
                <b id="Bold">
                  <img
                    src="/images/kwangheeKim/profile.png"
                    className="commentFrofile"
                    alt=""
                  />
                  anineworld
                </b>
                님 <b id="Bold">외 10명</b>이 좋아합니다
              </p>
              <br />
              <p>
                <b id="Bold">canon_mj</b> 위워크에서 진행한 베이킹 클래스... 더
                보기
              </p>
              <div className="commentlistdiv">
                <p>
                  <b id="Bold">neceosecius</b> 거봐 좋았잖아~~~
                  <img
                    src="/images/kwangheeKim/heart.png"
                    className="heart"
                    alt=""
                  />
                </p>
                {commentlist.map((commentArr, i) => {
                  return (
                    <CommentList
                      userName={userName}
                      userComment={commentArr}
                      key={i}
                    />
                  );
                })}
              </div>
              <p>42분 전</p>
            </div>
            <input
              type="text"
              id="commentInputBox"
              value={commentinput}
              placeholder="댓글 달기..."
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  writecomment();
                } else {
                  commentonChange();
                }
              }}
              onChange={commentonChange}
            />
            <button type="button" id="writeBtn" onClick={writecomment}>
              게시
            </button>
          </article>
        </div>

        <div className="rightside">
          <img
            src="/images/kwangheeKim/profile.png"
            className="sideFrofile"
            alt=""
          />
          <p>
            <b id="Bold">wecode_bootcamp</b>
            <br />
            WeCode | 위코드
          </p>

          <div className="story">
            <div className="storyTop">
              <span>스토리</span>
              <span>
                <b id="Bold">모두 보기</b>
              </span>
            </div>
            <div className="storyMid">
              <img
                src="/images/kwangheeKim/profile.png"
                className="storyFrofile"
                alt=""
              />
              <p>
                <b id="Bold">_yum_s</b>
                <br />
                16분 전
              </p>
            </div>
            <div className="storyMid">
              <img
                src="/images/kwangheeKim/profile.png"
                className="storyFrofile"
                alt=""
              />
              <p>
                <b id="Bold">drik_eat_drink</b>
                <br />
                3시간 전
              </p>
            </div>
            <div className="storyMid">
              <img
                src="/images/kwangheeKim/profile.png"
                className="storyFrofile"
                alt=""
              />
              <p>
                <b id="Bold">hyukyc</b>
                <br />
                20시간 전
              </p>
            </div>
            <div className="storyMid">
              <img
                src="/images/kwangheeKim/profile.png"
                className="storyFrofile"
                alt=""
              />
              <p>
                <b id="Bold">jminkeek</b>
                <br />
                20시간 전
              </p>
            </div>
          </div>

          <div className="recommend">
            <div className="recommendTop">
              <span>회원님을 위한 추천</span>
              <span>
                <b id="Bold">모두 보기</b>
              </span>
            </div>
            <div className="recommendMid">
              <img
                src="/images/kwangheeKim/profile.png"
                className="recommendFrofile"
                alt=""
              />
              <p>
                <b id="Bold">ioaaaaahye</b>
                <br />
                _legend.a님 외 2명이...
              </p>
              <span className="follow">
                <p>팔로우</p>
              </span>
            </div>
            <div className="recommendMid">
              <img
                src="/images/kwangheeKim/profile.png"
                className="recommendFrofile"
                alt=""
              />
              <p>
                <b id="Bold">rampart81</b>
                <br />
                ringo.in.seoul님 외 12...
              </p>
              <span className="follow">
                <p>팔로우</p>
              </span>
            </div>
            <div className="recommendMid">
              <img
                src="/images/kwangheeKim/profile.png"
                className="recommendFrofile"
                alt=""
              />
              <p>
                <b id="Bold">shawnjjoo</b>
                <br />
                jimmylee1220님 외 1...
              </p>
              <span className="follow">
                <p>팔로우</p>
              </span>
            </div>
          </div>

          <div className="info">
            <span>
              Instagram 정보 · 지원 · 홍보 센터 · API ·<br />
              채용 정보 · 개인정보처리방침 · 약관 ·<br />
              디렉터리 · 프로필 · 해시태그 · 언어
              <br />
              <br />ⓒ 2019 INSTAGRAM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainKwang;
