import React from 'react';
import './friendBox.scss';
import Friend from '../friend/Friend';

export default function FriendBox({ userData }) {
  console.log(userData);
  return (
    <div className="friendBox">
      <div className="top-article">
        <div className="top-article__container">
          {userData.friend.map(data => {
            return (
              <Friend key={data.id} userName={data.name} userImg={data.img} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
