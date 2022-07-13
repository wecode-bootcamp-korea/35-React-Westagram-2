import { useState } from 'react';

const Comment = ({ name }) => {
  const [comment, setComment] = useState([]);
  const [values, setValues] = useState('');

  const inputValue = e => {
    setValues(e.target.value);
  };

  const validation = () => {
    return values.length > 1;
  };

  const handleAddComment = e => {
    e.preventDefault();

    const inputObj = {
      value: e.target[0].value,
      name,
      count: 0,
    };

    setComment([...comment, inputObj]);
    setValues('');
    e.target[0].value = null;
  };

  const handleRemoveComment = e => {
    const filtered = comment
      .map((data, i) => {
        if (e !== i) {
          return data;
        }
        return null;
      })
      .filter(n => n);
    setComment(filtered);
  };

  const handleAddLike = e => {
    let newCount = [...comment];
    newCount[e].count++;
    setComment(newCount);
  };
  return (
    <>
      <div className="comment">
        <ul>
          {comment.map((comment, index) => (
            <li key={index}>
              <div className="comment__li">
                <div className="comment__name">
                  <span>{comment?.name}</span>
                  <span>{comment?.value}</span>
                </div>
                <div className="comment__li__btn">
                  <span>{comment?.count}</span>
                  <button onClick={() => handleAddLike(index)}>👍</button>
                  <button onClick={() => handleRemoveComment(index)}>❌</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form className="comment__add" onSubmit={handleAddComment}>
        <input type="text" placeholder="댓글 달기" onChange={inputValue} />
        <button type="submit" disabled={!validation()}>
          게시
        </button>
      </form>
    </>
  );
};

export default Comment;
