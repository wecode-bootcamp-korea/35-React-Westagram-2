import { BiSearch } from 'react-icons/bi';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FiPlusSquare } from 'react-icons/fi';
import { AiOutlineCompass } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';

import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="navContainer">
        <div className="navLeftLogo">
          <div className="logo">Instagram</div>
        </div>
        <div className="navMidSearch">
          <div className="searchBox">
            <input
              type="text"
              name="search"
              className="searchInput"
              placeholder="검색"
            />
            <BiSearch />
          </div>
        </div>
        <div className="navEndIcons">
          <div className="navIcon">
            <BsFillHouseDoorFill />
          </div>
          <div className="navIcon">
            <IoPaperPlaneOutline />
          </div>
          <div className="navIcon">
            <FiPlusSquare />
          </div>
          <div className="navIcon">
            <AiOutlineCompass />
          </div>
          <div className="navIcon">
            <BiHeart />
          </div>
          <div className="navProfileIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
