// import { useEffect, useState } from 'react';
import './Footer.scss';

function Footer() {
  // const [inputData, setInputData] = useState([]);

  // useEffect(() => {
  //   fetch('./components/Footer/hrefData.json', {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(data => setInputData(data));
  // }, []);

  return (
    <footer>
      <nav className="footerNav">
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
          <p>© 2022 Instagram from Meta</p>
        </div>
      </nav>
    </footer>
  );
}

const HREF_DATA1 = [
  { name: 'Meta', href: 'https://about.facebook.com/meta' },
  { name: '소개', href: 'https://about.instagram.com/' },
  { name: '블로그', href: 'https://about.instagram.com/blog/' },
  { name: '채용 정보', href: 'https://www.instagram.com/about/jobs/' },
  { name: '도움말', href: 'https://help.instagram.com/' },
  { name: 'API', href: 'https://developers.facebook.com/docs/instagram' },
  {
    name: '개인정보처리방침',
    href: 'https://www.instagram.com/legal/privacy/',
  },
  { name: '약관', href: 'https://www.instagram.com/legal/terms/' },
  { name: '인기 계정', href: 'https://www.instagram.com/directory/profiles/' },
  { name: '해시태그', href: 'https://www.instagram.com/directory/hashtags/' },
  { name: '위치', href: 'https://www.instagram.com/explore/locations/' },
  { name: 'Instagram Lite', href: 'https://www.instagram.com/web/lite/' },
  {
    name: '연락처 업로드 & 비사용자',
    href: 'https://www.facebook.com/help/instagram/261704639352628',
  },
];
const HREF_DATA2 = [
  {
    name: '댄스',
    href: 'https://www.instagram.com/topics/dance-and-performance/',
  },
  { name: '식음료', href: 'https://www.instagram.com/topics/food-and-drink/' },
  {
    name: '집 및 정원',
    href: 'https://www.instagram.com/topics/home-and-garden/',
  },
  { name: '음악', href: 'https://www.instagram.com/topics/music/' },
  { name: '시각 예술', href: 'https://www.instagram.com/topics/visual-arts/' },
];

export default Footer;
