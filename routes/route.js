import express from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controller/post-controller.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/posts", getAllPosts);
router.get("/post/:id", getPost);
router.get("/update/:id", updatePost);

export default router;
