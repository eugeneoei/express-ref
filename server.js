const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PostModel = require("./models/post");
const CommentModel = require("./models/comment");

const uri = "mongodb://localhost:27017/flacebook";

app.use(express.urlencoded({ extended: true }));

app.post("/posts", async (req, res) => {
    try {
        await PostModel.create(req.body);
        res.send("New post created");
    } catch (error) {
        console.log(error);
        res.status(400).send("failed to create post");
    }
});

app.get("/posts/:postId", async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.postId).populate(
            "comments",
            "content"
        );
        // const post = await PostModel.findById(req.params.postId).populate([
        //     {
        //         path: "comments",
        //         select: "content"
        //     }
        // ]);
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(400).send("failed to get one post");
    }
});

app.post("/posts/:postId/comments", async (req, res) => {
    try {
        const comment = await CommentModel.create({
            post: mongoose.Types.ObjectId(req.params.postId),
            content: req.body.content
        });
        await PostModel.findByIdAndUpdate(req.params.postId, {
            $push: {
                comments: comment._id
            }
        });
        res.send("New comment created");
    } catch (error) {
        console.log(error);
        res.status(400).send("failed to create comment");
    }
});

app.get("/posts/:postId/comments", async (req, res) => {
    try {
        // const comments = await CommentModel.find({
        //     post: req.params.postId
        // })
        const comments = await CommentModel.find({
            post: req.params.postId
        }).populate("post");
        res.json(comments);
    } catch (error) {
        console.log(error);
        res.status(400).send("failed to get comments");
    }
});

app.delete("/posts/:postId/comments/:commentId", async (req, res) => {
    try {
        await CommentModel.findByIdAndDelete(req.params.commentId);
        await PostModel.findByIdAndUpdate(req.params.postId, {
            $pull: {
                comments: req.params.commentId
            }
        });
        res.send("comment deleted");
    } catch (error) {
        console.log(error);
        res.status(400).send("failed to delete comment");
    }
});

app.listen("3000", async () => {
    try {
        await mongoose.connect(uri, { dbName: "flacebook" });
    } catch (err) {
        console.log(`Failed to connect to DB`);
        process.exit(1);
    }
    console.log("listening on port 3000.");
});
