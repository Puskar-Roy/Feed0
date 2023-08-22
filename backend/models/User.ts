import mongoose, { Document, Model, Schema } from "mongoose";
import bcryptjs from "bcryptjs";


interface ILike extends Document {
  user: string;
  timestamp: Date;
}

interface IComment extends Document {
  user: string;
  text: string;
  timestamp: Date;
}

interface MyPosts extends Document {
  author: string;
  content: string;
  likes: ILike[];
  comments: IComment[];
  public_imagePublicId: string;
  public_imageUrl: string;
  timestamp: Date;
}

export interface IUser extends Document {
  name: string;
  department: string;
  batch: string;
  college: string;
  email: string;
  password: string;
  cpassword: string;
  phone: number;
  imagePublicId: String;
  imageUrl: String;
  posts: string[];
  friends: string[];
  pendingRequests: string[];
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  imagePublicId: { type: String },
  imageUrl: { type: String },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  pendingRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

userSchema.pre<IUser>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 12);
    this.cpassword = await bcryptjs.hash(this.cpassword, 12);
  }
  next();
});

// Define User model
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
