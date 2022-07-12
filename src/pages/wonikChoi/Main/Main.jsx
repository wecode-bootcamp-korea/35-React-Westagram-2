import React, { useEffect, useState } from 'react';
import Feed from '../../../components/feed/Feed';
import ProfileBox from '../../../components/profileBox/ProfileBox';
import RecommendBox from '../../../components/recommendBox/RecommendBox';
import Nav from '../../../components/Nav/Nav';
import FriendBox from '../../../components/friendBox/FriendBox';

import './Main.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';

const MainWon = () => {
  const [commentList, setCommentList] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/userData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data);
      });
  }, []);

  return (
    <div className="main">
      <Nav />
      <section className="section-container">
        <div className="main-container">
          <FriendBox userData={userData} />

          {commentList.map(friend => {
            return (
              <Feed
                key={friend.id}
                userName={friend.name}
                userImg={friend.img}
                userBackImg={friend.backImg}
              />
            );
          })}
        </div>
        <div className="main-right">
          <ProfileBox />
          <div className="profile-container__separate">
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <RecommendBox />
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
  );
};

export default MainWon;
