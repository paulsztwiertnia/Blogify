const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./src/models/Post'); 
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogDB')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS 
app.use(cors());

// Route to get all blog posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get posts'});
    }
});

// Route to create a new blog post
app.post('/api/posts', async (req, res) => {
    const { title, content } = req.body;

    try {
        // Create a new post in the database
        const newPost = await Post.create({ title, content });
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error adding post:', error);
        res.status(500).json({ error: 'Failed to add post' });
    }
});

// Route to handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});
