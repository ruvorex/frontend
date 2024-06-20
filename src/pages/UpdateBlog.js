import React, { useEffect, useState } from 'react';
import BlogForm from '../components/BlogForm';
import axios from 'axios';

const UpdateBlog = ({ match, history }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(`/api/blogs/${match.params.id}`);
      setBlog(response.data);
    };

    fetchBlog();
  }, [match.params.id]);

  const handleUpdateBlog = async (blogData) => {
    await axios.put(`/api/blogs/${match.params.id}`, blogData);
    history.push('/admin/blogs');
  };

  return (
    <div>
      <h1>Update Blog</h1>
      {blog && <BlogForm blog={blog} onSubmit={handleUpdateBlog} />}
    </div>
  );
};

export default UpdateBlog;
