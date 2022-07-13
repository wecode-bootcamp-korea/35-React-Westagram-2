import { UserStory, UseRecommend } from '../components/Story';
import Nav from '../components/Nav';
import Comment from '../components/Comment';
// import Feed from '../components/Feed';
import './Main.scss';

const Main = () => {
  const name = '테스트';
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
      <div className="main-container">
        <main className="container">
          <div className="container">
            {/* <Feed /> */}
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
                <Comment name={name} />
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
      </div>
    </>
  );
};

export default Main;
