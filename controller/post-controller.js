import { response } from "express";
import Post from "../schema/post-schema.js";

export const createPost = async (request, response) => {
  console.log("request: ", request.body);
  try {
    const post = await new Post(request.body);
    post.save();
    response.status(200).json("Blog saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getAllPosts = async (request, response) => {
  try {
    const posts = await Post.find({});
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getPost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const updatePost = async (request, response) => {
  try {
    const newPost = await Post.findById(request.params.id);
    response.status(200).json(newPost);
  } catch (error) {
    response.status(500).json(error);
  }
};
