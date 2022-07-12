import React from 'react';

const CommentList = props => {
  const { userName, userComment } = props;
  return (
    <p>
      <span className="userId"> {userName} </span>
      <span className="userComment"> {userComment} </span>
      <img src="/images/kwangheeKim/heart.png" className="heart" alt="" />
    </p>
  );
};

export default CommentList;
