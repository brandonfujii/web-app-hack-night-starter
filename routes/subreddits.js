const express = require("express")
const router = express.Router();
const SubredditModel = require("../models/subreddit")

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

/* Get a subreddit by a specific ID  */
router.get("/:id", (req, res) => {
    const subredditId = req.params.id
    // Implement this
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