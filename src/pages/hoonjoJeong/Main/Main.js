import { UserStory, UseRecommend } from '../components/Story';
import Nav from '../components/Nav';
import './Main.scss';
import { useState } from 'react';

const Main = () => {
  const [comment, setComment] = useState([]);
  const [val, setVal] = useState('');

  const inputValue = e => {
    setVal(e.target.value);
  };

  const validation = () => {
    return val.length > 1;
  };

  const handleAddComment = e => {
    e.preventDefault();

    const inputObj = {
      value: e.target[0].value,
      name: 'TEST',
      count: 0,
    };

    setComment([...comment, inputObj]);
    setVal('');
    e.target[0].value = null;
  };

  const handleRemoveComment = e => {
    const filtered = comment
      .map((data, i) => {
        if (e !== i) {
          return data;
        }
      })
      .filter(n => n);
    setComment(filtered);
  };

  const handleAddLike = e => {
    let newCount = [...comment];
    newCount[e].count++;
    setComment(newCount);
  };

  const avatar = '../../images/hoonjoJeong/avater.jpeg';
  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.0/css/all.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />
      <Nav />
      <main>
        <div className="container">
          <div className="left-parents">
            <div className="feed-title">
              <div className="user">
                <div className="user-avatar">
                  <img alt="" src={avatar} className="user__avatar" />
                </div>
                <div className="user-text">
                  <span>Test_tesT</span>
                  <span>wecode - 위코드</span>
                </div>
              </div>
              <span className="material-icons-outlined"> more_horiz </span>
            </div>
            <div>
              <img alt="" src={avatar} />
            </div>
            <div className="feed-comment">
              <div className="comment-i">
                <div>
                  <button className="like-btn">
                    <span className="material-icons-outlined">
                      favorite_border
                    </span>
                  </button>
                  <button className="modal-btn">
                    <span className="material-icons-outlined"> textsms </span>
                  </button>
                  <span className="material-icons-outlined"> file_upload </span>
                </div>
                <span className="material-icons-outlined bookmark">
                  bookmark_border
                </span>
              </div>
              <div className="like-box">
                <div className="user">
                  <div className="user__avatar">
                    <img alt="" src={avatar} className="user__avatar smaill" />
                  </div>
                  <p>Test_ tesT님 외</p>
                  <p className="like-count">10</p>
                  <p>명이 좋아합니다</p>
                </div>
              </div>
              <div className="comment">
                <ul>
                  {comment.map((comment, index) => (
                    <li key={index}>
                      <div className="comment__li">
                        <div className="comment__name">
                          <span>{comment?.name}</span>
                          <span>{comment?.value}</span>
                        </div>
                        <div className="comment__li__btn">
                          <span>{comment?.count}</span>
                          <button onClick={() => handleAddLike(index)}>
                            👍
                          </button>
                          <button onClick={() => handleRemoveComment(index)}>
                            ❌
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <form className="comment__add" onSubmit={handleAddComment}>
                <input
                  type="text"
                  placeholder="댓글 달기"
                  onChange={inputValue}
                />
                <button type="submit" disabled={!validation()}>
                  게시
                </button>
              </form>
            </div>
          </div>
          <div className="right-parents">
            <div className="right-main">
              <div className="right-user-box">
                <div className="user right">
                  <div className="user-avatar">
                    <img alt="" src={avatar} className="user__avatar" />
                  </div>
                  <div className="user-text">
                    <span>Test_tesT </span>
                    <span>wecode | 위코드</span>
                  </div>
                </div>
              </div>
              <div className="right-story">
                <div className="right-story__text">
                  <p>스토리</p>
                  <p>모두 보기</p>
                </div>
                <ul>
                  <UserStory />
                  <UserStory />
                  <UserStory />
                  <UserStory />
                  <UserStory />
                  <UserStory />
                </ul>
              </div>
              <div className="right-recommend">
                <div className="right-story__text">
                  <p>회원님을 위한 추천</p>
                  <p>모두 보기</p>
                </div>
                <ul>
                  <UseRecommend />
                  <UseRecommend />
                  <UseRecommend />
                  <UseRecommend />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
