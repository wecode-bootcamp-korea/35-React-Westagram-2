import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { BiHeart } from 'react-icons/bi';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsBookmark } from 'react-icons/bs';
import { TbMoodSmile } from 'react-icons/tb';
import './LContents.scss';

function LContents() {
  return (
    <div className="contentsContainer">
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

      <div className="contentsDiscription">
        <div className="descriptionContainer">
          <div className="like">
            <p>
              udtbro님 <span>여러 명</span>이 좋아합니다
            </p>
          </div>
          <div className="description">
            <span className="userId">오인유</span>응애 사람 살려
          </div>
          <div className="comment">
            <div className="userName">김첨지</div>
            <p className="userComment">asdf</p>
          </div>
          <div className="timeline">
            <p>1일 전</p>
          </div>
        </div>
      </div>

      <form className="contentsComment">
        <div className="smileWrapper">
          <TbMoodSmile />
        </div>
        <input
          className="commentInput"
          type="text"
          placeholder="댓글 달기..."
        />
        <button className="commentBtn" disabled="disabled">
          게시
        </button>
      </form>
    </div>
  );
}

export default LContents;
