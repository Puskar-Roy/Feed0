import express from "express";
import controllers from "../controller/appController";
import { multerConfig } from "../utils/multer";

const {
  loginController,
  registerController,
  getAllPost,
  getPost,
  updatePost,
  deletePost,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  createPost,
  likePost,
  addComment,
} = controllers;

// Set Up Router
const router = express.Router();

// Set Up End Points

//      1.Auth End Point
router.post("/", loginController);
router.post("/register", multerConfig.single("image"), registerController); // in input make sure id and name is "image"

//      2.Users End Point
router.get("/users", getAllUser);
router.get("/users/:id", getUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

//      2.Users End Point
router.post("/posts", multerConfig.single("image"), createPost);
router.post("/posts/:postId/:userId", likePost);
router.get("/posts", getAllPost);
router.get("/posts/:id", getPost);
router.patch("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

export default router;
