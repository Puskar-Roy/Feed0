import mongoose, { Document, Model, Schema } from "mongoose";

interface ILike extends Document {
  user: string;
  timestamp: Date;
}

interface IComment extends Document {
  user: string;
  text: string;
  timestamp: Date;
}

interface IPost extends Document {
  userId: string;
  author: string;
  content: string;
  likes: ILike[];
  comments: IComment[];
  public_imagePublicId: string;
  public_imageUrl: string;
}

const likeSchema: Schema<ILike> = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

const commentSchema: Schema<IComment> = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

const postSchema: Schema<IPost> = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    likes: [likeSchema],
    comments: [commentSchema],
    public_imagePublicId: { type: String },
    public_imageUrl: { type: String },
  },
  {
    timestamps: true,
  }
);


const Post: Model<IPost> = mongoose.model<IPost>("Post", postSchema);

export default Post;
