import React, { useState } from 'react';
import './PostForm.css';
import mockApi from '../../api/mockApi';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (event) => { 
    event.preventDefault();
    console.log('Creating post:', title, content, imageUrl);
    const newPost = await mockApi.createPost({ title, content, imageUrl });
    console.log('New post created:', newPost);
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        className="post-form-input"
      />
      <input
        type="text"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        className="post-form-input"
      />
      <input
        type="text"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
        placeholder="Image URL"
        className="post-form-input"
      />
      <button type="submit" className="post-form-button">Submit</button>
    </form>
  );
}

export default PostForm;