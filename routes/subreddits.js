const express = require("express")
const router = express.Router();
const SubredditModel = require("../models/subreddit")
const PostModel = require("../models/post")

/* Fetch all subreddits */
router.get("/", (req, res) => {
    SubredditModel.find({}, (err, subs) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.render("subreddits", {subs: subs})
        }
    })
})

/* Get a subreddit and its posts by a specific subreddit ID  */
router.get("/:id", (req, res) => {
    const subredditId = req.params.id

    SubredditModel.findById(subredditId)
        .populate("posts")
        .exec((err, sub) => {
            if (err) {
                res.status(500).json({ error: err })
            }
            
            res.render("sub", sub)
        })
})

/* Create a post on subreddit by id */
router.post("/:id", (req, res) => {
    const subredditId = req.params.id
    const { title, link, content } = req.body

    PostModel.create({ 
        title,
        link,
        content,
    }, (err, post) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: err })
            return
        }

        SubredditModel.update(
            { _id: subredditId },
            { $push: { posts: post._id }},
            (err, message) => {
                if (err) {
                    res.status(500).json({ error: err })
                } else {
                    res.status(200).json({ message })
                }
            }
        )
    })
})

/* Create a subreddit based on a title and description */
router.post("/", (req, res) => {
    const { title, description } = req.body

    SubredditModel.create({
        title: title,
        description: description,
    }, (err, sub) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.status(200).json({ subreddit: sub })
        }
    })
})

module.exports = router
