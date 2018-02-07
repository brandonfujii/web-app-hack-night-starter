const subredditsRouter = require("./subreddits")
// const postsRouter = require("./posts")

function routes(app) {
    // View routes
    app.get("/", (req, res) => {
        res.render("index", { title: "Hello, Hack Night!", message: "I, for one, welcome our robot overlords" })
    })

    // API routes
    app.use("/subreddits", subredditsRouter)
    // app.use("/posts", postsRouter)
}

module.exports = routes

