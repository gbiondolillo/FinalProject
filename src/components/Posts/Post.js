import React from 'react';
import './Post.css';

function Post({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
