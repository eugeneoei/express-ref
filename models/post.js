const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment",
    }]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post
