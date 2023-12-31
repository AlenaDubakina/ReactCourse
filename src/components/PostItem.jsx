import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = ({ post, deletePost }) => {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => deletePost(post.id)}>Удалить</MyButton>
      </div>
    </div>
  );
};
export default PostItem;
