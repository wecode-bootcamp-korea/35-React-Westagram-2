import React, { useState } from 'react';
import '../../pages/seongeunPark/Main/Main.scss';

function Comment() {
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
              <span className="comment_user-name main-user">kookybrown</span>
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

          {commentList.map(function (a, i) {
            return (
              <div className="comments-comment" key={'i'}>
                <div className="comment">
                  <span className="comment_user-name">neceosecius</span>
                  <p className="comment_content" key={i}>
                    {a}
                  </p>
                </div>
                <i className="far fa-heart empty" />
              </div>
            );
          })}
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
    </>
  );
}

export default Comment;
