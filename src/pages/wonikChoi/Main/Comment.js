import React, { useState, useRef } from 'react';

const Comment = ({ comment, id, dispatch }) => {
  const [iconClass, setIconClass] = useState('bx bx-heart');
  const isFalse = useRef(true);

  const likeHaart = () => {
    return isFalse.current === true
      ? (setIconClass(`bx bxs-heart`), (isFalse.current = false))
      : (setIconClass(`bx bx-heart`), (isFalse.current = true));
  };

  return (
    <div className="description-comment">
      <div className="comment-left">
        <div className="user-name">Yelihi</div>
        <span className="user-comment">{comment}</span>
      </div>
      <div className="comment-right">
        <i
          className={iconClass}
          id="exemple"
          style={{ color: isFalse.current ? 'rgba(0,0,0,0.5)' : 'red' }}
          onClick={likeHaart}
        ></i>
        <i
          className="bx bx-trash"
          onClick={() => {
            dispatch({ type: 'delete-message', payload: { id } });
          }}
        ></i>
      </div>
    </div>
  );
};

export default Comment;
