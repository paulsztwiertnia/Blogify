import React, { useState } from 'react';
import './NewPost.css';

// new post functional component
function NewPost() {
  const [title, setTitle] = useState(''); //use state for title and setting title of blog post
  const [content, setContent] = useState(''); // use state for content and setting content of blog post

  const handleSubmit = async (e) => { //function which handles the form submission
    e.preventDefault(); // prevent default form submission

    // make async POST reqeust to add a new post
    try {
        const response = await fetch('http://localhost:3001/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }), // convert the post to a json string
        });

        // error check if the response was not ok
        if (!response.ok) {
            throw new Error('Failed to add post');
        }

        // alert the user of the post submission status, reset the title and content state back to empty strings
        alert('Post added successfully!');
        setTitle('');
        setContent('');
    } catch (error) {
        console.error('Error adding post:', error); //log errors during fetch
    }
};
  // return the NewPost component
  return (
    <div className="new-post-container">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit} className="new-post-form">
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default NewPost;
