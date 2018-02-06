const express = require("express")
const router = express.Router();
const subreddit = require("../models/subreddit")

/* Fetch all subreddits */
router.get("/", (req, res) => {
    subreddit.find({}, (err, subs) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.render("subreddits.ejs", {subs: subs})
        }
    })
})

/* Get a subreddit by a specific ID  */
router.get("/:id", (req, res) => {
    const subredditId = req.params.id
    
    subreddit.findOne({
        _id: subredditId
    }, (err, sub) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.status(200).json({ subreddit: sub })
        }
    })
})

/* Create a subreddit based on a title and description */
router.post("/", (req, res) => {
    const { title, description } = req.body
    subreddit.create({
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