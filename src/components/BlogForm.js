import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = ({ blog, onSubmit }) => {
  const [title, setTitle] = useState(blog ? blog.title : '');
  const [content, setContent] = useState(blog ? blog.content : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, content };
    onSubmit(blogData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
