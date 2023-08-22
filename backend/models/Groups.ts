import mongoose, { Document, Model, Schema } from "mongoose";
import { IUser } from "./User";
import { IPost } from "./Posts";

interface IGroup extends Document {
  name: string;
  description: string;
  members: IUser["_id"][];
  posts: IPost["_id"][];
  joinRequests: IUser["_id"][]; // Add the joinRequests field
}

const groupSchema: Schema<IGroup> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  joinRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Add the joinRequests field
});

const Group: Model<IGroup> = mongoose.model<IGroup>("Group", groupSchema);

export default Group;
