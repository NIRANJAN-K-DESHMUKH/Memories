import mongoose from "mongoose";

//schema
const postSchema = new mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    }
}, 
{ timestamps: true }
);

//model
const PostMessage = new mongoose.model("PostMessage", postSchema);

export default PostMessage;