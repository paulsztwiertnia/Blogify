//import mongoose from mongoDB
const mongoose = require('mongoose');

// define a schema for the posts in mongoDB
const postSchema = new mongoose.Schema({
  title: String, //title of post
  content: String, //content of post
});

// create a model for the schema
const Post = mongoose.model('Post', postSchema);

// then, export the post model so other files can use it
module.exports = Post;
