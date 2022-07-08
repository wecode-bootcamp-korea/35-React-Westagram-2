import React from 'react';
import '../../pages/seongeunPark/Main/Main.scss';

function Comment(props) {
  return props.commentList.map(function (a, i) {
    return (
      <div className="comments-comment">
        <div className="comment">
          <span className="comment_user-name">neceosecius</span>
          <p className="comment_content" key={i}>
            {a}
          </p>
        </div>
        <i className="far fa-heart empty"></i>
      </div>
    );
  });
}

export default Comment;
