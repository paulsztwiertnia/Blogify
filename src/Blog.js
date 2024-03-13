import React, { useState, useEffect } from 'react';
import './Blog.css'; 

// blog function which displats the blog posts
function Blog() {
  const [posts, setPosts] = useState([]); // hook for the state of the blog posts, initiallized as empty to begin with

  // useEffect hook fetches the blog posts from the back end at the specified API endpoits
  useEffect(() => {
    fetch('http://localhost:3001/api/posts')
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to fetch posts'); // throw an error if the response isnt okay
          }
          return response.json(); //response as json
      })
      .then(data => setPosts(data)) //update the post state
      .catch(error => console.error('Error fetching posts:', error)); // catch and then log an error if needed
  }, []);

  // returns the blog posts
  return (
    <div className="blog-container">
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post._id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
