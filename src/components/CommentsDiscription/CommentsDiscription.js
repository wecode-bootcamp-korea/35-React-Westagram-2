import './CommentsDiscription.scss';

function CommentsDiscription({ value }) {
  return (
    <div className="CommentsDiscription">
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
          {value.map((commentsArr, index) => {
            return (
              <div className="commentContainer">
                <div className="userName" key={index}>
                  김첨지
                </div>
                <span className="userComment">{commentsArr}</span>
              </div>
            );
          })}
        </div>
        <div className="timeline">
          <p>1일 전</p>
        </div>
      </div>
    </div>
  );
}

export default CommentsDiscription;
