import React from 'react';

const CommentList = ({ userName, userComment }) => {
  return (
    <p>
      <span className="userId"> {userName} </span>
      <span className="userComment"> {userComment} </span>
      <img src="/images/kwangheeKim/heart.png" className="heart" alt="" />
    </p>
  );
};

export default CommentList;
