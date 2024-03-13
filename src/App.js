import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import NewPost from './NewPost';
import './App.css';

// App component to set up the router and navigation links 
function App() {


  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/new-post">New Post</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
