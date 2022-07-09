import React from 'react';
import '../../pages/seongeunPark/Main/Main.scss';

function Comment(props) {
  return props.commentList.map((a, i) => {
    return (
      <div className="comments-comment" key={i}>
        <div className="comment">
          <span className="comment_user-name">neceosecius</span>
          <p className="comment_content">{a}</p>
        </div>
        <i className="far fa-heart empty" />
      </div>
    );
  });
}

export default Comment;
