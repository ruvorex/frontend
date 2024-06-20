import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';  // use the axios instance

const ViewAllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');  
        setBlogs(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewAllBlogs;
