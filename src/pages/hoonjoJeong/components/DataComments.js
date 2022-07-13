function DataComments({ item }) {
  return (
    <>
      <div className="comment">
        <ul>
          {item.map((item, index) => (
            <li key={item.name + index}>
              <div className="comment__li">
                <div className="comment__name">
                  <span>{item?.name}</span>
                  <span>{item?.contents}</span>
                </div>
                <div className="comment__li__btn">
                  <span>{item?.count}</span>
                  <button>👍</button>
                  <button>❌</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form className="comment__add">
        <input type="text" placeholder="댓글 달기" />
        <button type="submit">게시</button>
      </form>
    </>
  );
}

export default DataComments;
