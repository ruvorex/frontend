import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminBlogs from './pages/AdminBlogs';
import AdminUsers from './pages/AdminUsers';
import CreateBlog from './pages/CreateBlog';
import UpdateBlog from './pages/UpdateBlog';
import DeleteBlog from './pages/DeleteBlog';
import ViewAllBlogs from './pages/ViewAllBlogs';
import ViewSpecificBlog from './pages/ViewSpecificBlog';
import ViewEAdvisor from './pages/ViewEAdvisor';
import Login from './pages/Login';

const App = () => {
  const isAdmin = localStorage.getItem('role') === 'admin';

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/blogs" element={isAdmin ? <AdminBlogs /> : <Navigate to="/login" />} />
        <Route path="/admin/users" element={isAdmin ? <AdminUsers /> : <Navigate to="/login" />} />
        <Route path="/admin/create-blog" element={isAdmin ? <CreateBlog /> : <Navigate to="/login" />} />
        <Route path="/admin/update-blog/:id" element={isAdmin ? <UpdateBlog /> : <Navigate to="/login" />} />
        <Route path="/admin/delete-blog/:id" element={isAdmin ? <DeleteBlog /> : <Navigate to="/login" />} />
        <Route path="/blogs/:id" element={<ViewSpecificBlog />} />
        <Route path="/blogs" element={<ViewAllBlogs />} />
        <Route path="/eadvisor" element={<ViewEAdvisor />} />
        <Route path="/" element={<ViewAllBlogs />} />
      </Routes>
    </Router>
  );
};

export default App;
