const express = require("express")
const router = express.Router();
const PostModel = require("../models/post")

router.get("/:id", (req, res) => {
    const postId = req.params.id
    PostModel.findById(postId, (err, post) => {
        if (!post) {
            res.render("404")
        } else {
            res.render("post", {
                title: post.title,
                content: post.content
            })
        }
    })
})

module.exports = router