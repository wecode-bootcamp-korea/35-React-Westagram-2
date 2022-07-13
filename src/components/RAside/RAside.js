import './RAside.scss';

function RAside() {
  return (
    <aside className="asideContainer">
      <div className="profileContainer">
        <div className="profile">
          <div className="profileImage" />
          <div className="profileName">
            <p className="userId">OI_nyu</p>
            <p className="userName">오인유</p>
          </div>
        </div>
        <div className="changeUserBtn">
          <p>전환</p>
        </div>
      </div>
      <div className="friendsSuggestion">
        <div className="quotation">
          <div>
            <p className="leftP">회원님을 위한 추천</p>
          </div>
          <div>
            <p className="rightP">모두 보기</p>
          </div>
        </div>
        <div class="friendsContainer">
          <div class="friends">
            <div class="friendsImage" />
            <div class="friendsName">
              <p class="userName">이 원재님</p>
              <p class="typeOfSuggestion">회원님을 위한 추천</p>
            </div>
          </div>
          <div class="followBtn">
            <span class="follow">팔로우</span>
          </div>
        </div>
        <div class="friendsContainer">
          <div class="friends">
            <div class="friendsImage" />
            <div class="friendsName">
              <p class="userName">이 원재님</p>
              <p class="typeOfSuggestion">회원님을 위한 추천</p>
            </div>
          </div>
          <div class="followBtn">
            <span class="follow">팔로우</span>
          </div>
        </div>
        <div class="friendsContainer">
          <div class="friends">
            <div class="friendsImage" />
            <div class="friendsName">
              <p class="userName">이 원재님</p>
              <p class="typeOfSuggestion">회원님을 위한 추천</p>
            </div>
          </div>
          <div class="followBtn">
            <span class="follow">팔로우</span>
          </div>
        </div>
        <div class="friendsContainer">
          <div class="friends">
            <div class="friendsImage" />
            <div class="friendsName">
              <p class="userName">이 원재님</p>
              <p class="typeOfSuggestion">회원님을 위한 추천</p>
            </div>
          </div>
          <div class="followBtn">
            <span class="follow">팔로우</span>
          </div>
        </div>
        <div class="friendsContainer">
          <div class="friends">
            <div class="friendsImage" />
            <div class="friendsName">
              <p class="userName">이 원재님</p>
              <p class="typeOfSuggestion">회원님을 위한 추천</p>
            </div>
          </div>
          <div class="followBtn">
            <span class="follow">팔로우</span>
          </div>
        </div>
      </div>

      <div class="hrefListContainer">
        <div className="hrefList">
          {HREF_DATA1.map((hrefData, index) => {
            return (
              <div key={index}>
                <a href={hrefData.href}>{hrefData.name}</a>
              </div>
            );
          })}
        </div>
        <div className="hrefList">
          {HREF_DATA2.map((hrefData, index) => {
            return (
              <div key={index}>
                <a href={hrefData.href}>{hrefData.name}</a>
              </div>
            );
          })}
        </div>
        <div className="copyright">
          <p>© 2022 INSTAGRAM FROM META</p>
        </div>
      </div>
    </aside>
  );
}

const HREF_DATA1 = [
  { name: '소개', href: 'https://about.instagram.com/' },
  { name: '도움말', href: 'https://help.instagram.com/' },
  { name: '홍보 센터', href: 'https://about.instagram.com/blog/' },
  { name: 'API', href: 'https://developers.facebook.com/docs/instagram' },
  {
    name: '채용 정보',
    href: 'https://www.instagram.com/about/jobs/',
  },
];

const HREF_DATA2 = [
  { name: '개인정보처리방침', href: 'https://www.instagram.com/legal/terms/' },
  { name: '약관', href: 'https://www.instagram.com/legal/terms/' },
  { name: '위치', href: 'https://www.instagram.com/explore/locations/' },
  { name: '언어', href: '' },
];

export default RAside;
