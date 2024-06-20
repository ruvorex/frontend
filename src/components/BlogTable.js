import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const BlogTable = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get('/api/blogs');
      setBlogs(response.data);
    };

    fetchBlogs();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'content', headerName: 'Content', width: 300 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={blogs} columns={columns} pageSize={5} />
    </div>
  );
};

export default BlogTable;
