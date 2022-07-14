import { useState } from 'react';
import CommentsDiscription from '../CommentsDiscription/CommentsDiscription';
import { TbMoodSmile } from 'react-icons/tb';
import './ContentsComments.scss';

function ContentsComments() {
  const [comment, setComment] = useState('');
  const [canIPass, canYouPass] = useState(true);
  const [feedComments, setFeedComments] = useState([]);

  const handleCommentInput = event => {
    setComment(event.target.value);
  };

  const post = e => {
    e.preventDefault();
    const prevFeedComments = [...feedComments];
    prevFeedComments.push(comment);
    setFeedComments(prevFeedComments);
    setComment('');
    validation();
  };

  const validation = () => {
    return comment.length > 0 ? canYouPass(false) : canYouPass(true);
  };

  return (
    <div className="ContentsComments">
      <CommentsDiscription value={feedComments} />

      <form className="contentsComment" onKeyUp={validation} onSubmit={post}>
        <div className="smileWrapper">
          <TbMoodSmile />
        </div>
        <input
          className="commentInput"
          value={comment}
          type="text"
          onChange={handleCommentInput}
          placeholder="댓글 달기..."
        />
        <button
          className={'commentBtn' + (canIPass ? 'Off' : 'On')}
          type="submit"
          disabled={canIPass}
        >
          게시
        </button>
      </form>
    </div>
  );
}

export default ContentsComments;
