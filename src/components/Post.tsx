import { MutableRefObject, useEffect, useRef, useState } from "react";

interface PostItem {
  title: string;
  content: string;
}
const Post = () => {
  const [createPost, setCreatePost] = useState<PostItem[]>([]);
  const clickButton = () => {
    const title = inputTitle.current;
    const content = inputContent.current;

    setCreatePost([
      ...createPost,
      { title: title.value, content: content.value },
    ]);
    title.value = "";
    content.value = "";
  };
  const inputTitle = useRef() as MutableRefObject<HTMLInputElement>;
  const inputContent = useRef() as MutableRefObject<HTMLInputElement>;

  return (
    <div>
      <input type="text" placeholder="제목을 입력" ref={inputTitle}></input>
      <br></br>
      <input type="text" placeholder="내용을 입력" ref={inputContent}></input>
      <div>
        <button onClick={clickButton}>확인</button>
        <button>취소</button>
      </div>
      <ul>
        {createPost.map((PostItem, index) => (
          <li key={index}>
            <div>
              <span>{PostItem.title}</span>
            </div>
            <div>
              <span>{PostItem.content}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Post;
