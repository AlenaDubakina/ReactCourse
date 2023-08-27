import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import PostService from '../API/PostService';

const PostIdPage = () => {
  const [post, setPost] = useState('');
  const [comment, setComment] = useState([]);
  const params = useParams();
  const [fetchPostById, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  useEffect(() => {
    fetchPostById();
  }, []);
  const [fetchPostByIdComments, isLoading, error] = useFetching(async () => {
    const response = await PostService.getByIdComment(params.id);
    setComment(response.data);
  });
  useEffect(() => {
    fetchPostByIdComments();
  }, []);

  return (
    <div>
      {isPostsLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>Вы открыли пост с ID = {params.id} </h1>
          <strong>
            {post.id}. {post.title}
          </strong>
        </div>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ marginTop: 20 }}>
          <h2>Комментирии к посту</h2>
          {comment.map((c) => (
            <div key={c.id}>{c.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
