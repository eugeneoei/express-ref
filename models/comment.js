const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

// commentSchema.post("save", async doc => {
//     try {
//         await mongoose.model("Post").updateOne(
//             {
//                 _id: doc.tweet
//             },
//             {
//                 $push: {
//                     comments: doc._id
//                 }
//             }
//         );
//     } catch (e) {
//         console.log(e);
//     }
// });

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
