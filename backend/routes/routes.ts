import express from "express";
import controllers from "../controller/appController";
import { multerConfig } from "../utils/multer";
import verifyToken from "../middleware/middlewares";
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
  sendFriendRequestController,
  respondToFriendRequestController,
  getNewsFeed
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

//      3.Posts End Point
router.post("/posts/:userId", multerConfig.single("image"), createPost);
router.post("/posts/:postId/:userId", likePost);
router.get("/posts", verifyToken, getAllPost);
router.get("/posts/:id", getPost);
router.patch("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

//      4.Friends End Point
router.post("/addFriend/:senderId/:receiverId",sendFriendRequestController);
router.post(
  "/respondFriend/:userId/:requesterId",
  respondToFriendRequestController
);


router.get("/feed/:userId",getNewsFeed);


export default router;
