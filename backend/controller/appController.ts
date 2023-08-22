import { Request, Response } from "express";
import User from "../models/User";
import bcryptjs from "bcryptjs";
import { cloudinary } from "../utils/cloudinary";
import Post from "../models/Posts";
import jwt from "jsonwebtoken";
import { IUserRequest } from "../middleware/middlewares";

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ error: "Fill All Details", success: false });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(404).json({ error: "User Not Found", success: false });
    } else {
      const verifyPass = await bcryptjs.compare(password, userExist.password);
      if (verifyPass) {
        const token = jwt.sign(
          { id: userExist._id, phone: userExist.phone },
          process.env.JWT as string
        );
        const expirationDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
        const options = {
          expires: expirationDate,
          httpOnly: true,
        };
        return res.cookie("access_token", token, options).status(201).json({
          msg: "Log In Done !",
          userName: userExist.name,
          token: token,
          cookie: "stored",
          success: true,
        });
      } else {
        return res
          .status(500)
          .json({ error: "Invalid Details ", success: false });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error, success: false });
  }
};

const registerController = async (req: Request, res: Response) => {
  try {
    const {
      password,
      cpassword,
      name,
      department,
      batch,
      email,
      phone,
      college,
    } = req.body;
    let imagePublicId = "";
    let imageUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result.secure_url);
      imagePublicId = result.public_id;
      imageUrl = result.secure_url;
    }

    if (
      !name ||
      !department ||
      !batch ||
      !college ||
      !email ||
      !phone ||
      !password ||
      !cpassword
    ) {
      return res
        .status(400)
        .json({ error: "Fill required fields", success: false });
    }
    const userExist = await User.findOne({ email: email });
    const userExistPhone = await User.findOne({ phone: phone });
    if (userExist || userExistPhone) {
      return res
        .status(403)
        .json({ error: "User Already Exists", success: false });
    } else {
      const newUser = new User({
        password,
        cpassword,
        name,
        department,
        batch,
        college,
        phone,
        email,
        imagePublicId,
        imageUrl,
      });
      try {
        const user = await newUser.save();
        return res
          .status(200)
          .json({ message: "Registration Done!", success: true });
      } catch (error) {
        return res.status(500).send({ error: error, success: false });
      }
    }
  } catch (error) {
    return res.status(500).send({ error: error, success: false });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find().exec();
    res.json(users);
  } catch (error) {
    res.status(200).json(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await User.findById({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const update = await User.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json(update);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await User.findOneAndDelete({ _id: id });
    res.status(200).json("Delete");
  } catch (error) {
    res.status(400).json(error);
  }
};

const createPost = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }
  const { content } = req.body;
  let public_imagePublicId = "";
  let public_imageUrl = "";
  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path);
    public_imagePublicId = result.public_id;
    public_imageUrl = result.secure_url;
  }
  try {
    const newPost = new Post({
      author: user.name,
      userId: user._id.toString(),
      content,
      likes: [],
      comments: [],
      public_imagePublicId,
      public_imageUrl,
    });
    const savedPost = await newPost.save();
    user.posts.push(newPost._id);
    await user.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Could not create post" });
  }
};

const getAllPost = async (req: IUserRequest, res: Response) => {
  try {
    const posts = await Post.find().sort("-createdAt").exec();
    res.json(posts);
  } catch (error) {
    res.status(200).json(error);
  }
};

const getPost = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await Post.findById({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updatePost = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const update = await Post.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json(update);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await Post.findOneAndDelete({ _id: id });
    res.status(200).json("Delete");
  } catch (error) {
    res.status(400).json(error);
  }
};

const likePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId; // Assuming the post ID is in the URL parameter
    const userId = req.body.userId; // Assuming the user ID is in the request body

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { likes: { user: userId, timestamp: new Date() } } },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error liking post:", error);
    res.status(500).json({ error: "Could not like post" });
  }
};

const addComment = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId; // Assuming the post ID is in the URL parameter
    const { user, text } = req.body; // Assuming the user and text are in the request body

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: { user, text, timestamp: new Date() } } },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Could not add comment" });
  }
};

const sendFriendRequestController = async (req: Request, res: Response) => {
  const senderId = req.params.senderId;
  const receiverId = req.params.receiverId;

  try {
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.status(404).json({ message: "User not found." });
    }

    if (receiver.pendingRequests.includes(senderId)) {
      return res.status(400).json({ message: "Friend request already sent." });
    }
    receiver.pendingRequests.push(senderId);
    await receiver.save();

    res.json({ message: "Friend request sent successfully." });
  } catch (error) {
    console.error("Error sending friend request:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};


const respondToFriendRequestController = async (
  req: Request,
  res: Response
) => {
  const userId = req.params.userId;
  const requesterId = req.params.requesterId;
  const response = req.body.response; // 'accept' or 'reject'

  try {
    const user = await User.findById(userId);
    const requester = await User.findById(requesterId);

    if (!user || !requester) {
      return res.status(404).json({ message: "User not found." });
    }

    if (!user.pendingRequests.includes(requesterId)) {
      return res.status(400).json({ message: "Friend request not found." });
    }

    user.pendingRequests = user.pendingRequests.filter(
      (id) => id.toString() !== requesterId
    );

    if (response === "accept") {
      user.friends.push(requesterId);
      requester.friends.push(userId);
    }

    await user.save();
    await requester.save();

    res.json({ message: `Friend request ${response}ed.` });
  } catch (error) {
    console.error("Error responding to friend request:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};


const getNewsFeed = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    const friendIds = user.friends.map((friend) => friend.toString());
    const newsFeedPosts = await Post.find({ userId: { $in: friendIds } })
      .populate("author", "name imageUrl") // Populate author information
      .sort("-createdAt") // Sort by most recent
      .limit(10); 
    res.json(newsFeedPosts);

  } catch (error) {
    console.error("Error retrieving news feed:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default {
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
};
