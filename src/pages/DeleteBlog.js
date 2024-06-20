import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteBlog = ({ match }) => {
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(`/api/blogs/${match.params.id}`);
      setBlog(response.data);
    };

    fetchBlog();
  }, [match.params.id]);

  const handleDelete = async () => {
    await axios.delete(`/api/blogs/${match.params.id}`);
    navigate('/admin/blogs');
  };

  return (
    <div>
      <h1>Delete Blog</h1>
      {blog && (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default DeleteBlog;
