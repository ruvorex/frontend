import React from 'react';
import BlogForm from '../components/BlogForm';
import axios from 'axios';

const CreateBlog = ({ history }) => {
  const handleCreateBlog = async (blogData) => {
    await axios.post('/api/blogs', blogData);
    history.push('/admin/blogs');
  };

  return (
    <div>
      <h1>Create Blog</h1>
      <BlogForm onSubmit={handleCreateBlog} />
    </div>
  );
};

export default CreateBlog;
