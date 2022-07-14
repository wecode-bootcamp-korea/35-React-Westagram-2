import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { BiHeart } from 'react-icons/bi';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsBookmark } from 'react-icons/bs';
import './LContents.scss';
import ContentsComments from '../ContentsComments/ContentsComments';

function LContents() {
  return (
    <div className="LContents">
      <div className="contentHeader">
        <div className="Publisher">
          <div className="pubImage" />
          <div className="pubDetail">
            <div className="pubId">오인유</div>
          </div>
        </div>
        <div className="ellipsisIcon">
          <IoEllipsisHorizontalSharp />
        </div>
      </div>

      <div className="contentsArticle" />

      <div className="contentsInteract">
        <div className="frontalContainer">
          <div className="interactIcon">
            <BiHeart />
          </div>
          <div className="interactIcon">
            <IoChatbubbleOutline />
          </div>
          <div className="interactIcon">
            <IoPaperPlaneOutline />
          </div>
        </div>
        <div className="bookmarkContainer">
          <div className="interactIcon">
            <BsBookmark />
          </div>
        </div>
      </div>

      <ContentsComments />
    </div>
  );
}

export default LContents;
