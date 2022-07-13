import { useState, useEffect } from 'react';
import DataComments from './DataComments';

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const getFeeds = async () => {
    const json = await (
      await fetch(`http://localhost:3000/data/data.json`)
    ).json();
    setFeeds(json.data);
    setLoading(false);
  };
  useEffect(() => {
    getFeeds();
  }, []);
  const avatar = '../../images/hoonjoJeong/avater.jpeg';
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="parents">
          {feeds.map((item, index) => (
            <div key={index} className="left-parents">
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
                    <span className="material-icons-outlined" />
                  </div>
                  <span className="material-icons-outlined bookmark">
                    bookmark_border
                  </span>
                </div>
                <div className="like-box">
                  <div className="user">
                    <div className="user__avatar">
                      <img
                        alt=""
                        src={avatar}
                        className="user__avatar smaill"
                      />
                    </div>
                    <p>Test_ tesT님 외</p>
                    <p className="like-count">10</p>
                    <p>명이 좋아합니다</p>
                  </div>
                </div>
                <DataComments item={item.comment} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
