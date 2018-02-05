const subredditRouter = require("./subreddit")

function routes(app) {
    // View routes
    app.get("/", (req, res) => {
        res.render("index", { title: "Hello, Hack Night!", message: "I, for one, welcome our robot overlords" })
    })

    // API routes
    app.use("/subreddits", subredditRouter)
}

module.exports = routes

