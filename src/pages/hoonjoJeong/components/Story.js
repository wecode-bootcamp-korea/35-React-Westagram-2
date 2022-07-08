const Avatar = () => {
  return (
    <img
      alt=""
      src="../../images/hoonjoJeong/avater.jpeg"
      className="user__avatar"
    />
  );
};

export const UserStory = () => {
  return (
    <div className="user story">
      <div className="user-avatar">
        <Avatar />
      </div>
      <div className="user-text">
        <span>Test_tesT</span>
        <span>13분 전</span>
      </div>
    </div>
  );
};

export const UseRecommend = () => {
  return (
    <li>
      <div className="user story">
        <div className="user-avatar">
          <Avatar />
        </div>
        <div className="user-text">
          <span>Test_tesT</span>
          <span>_legend_a님 외 2명이</span>
        </div>
        <div className="user-follow-btn">팔로우</div>
      </div>
    </li>
  );
};
