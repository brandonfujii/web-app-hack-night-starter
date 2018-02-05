const db = require('./db')
const schema = db.Schema

const SubredditSchema = new schema({
    title: String,
    description:  String,
})

module.exports = db.model("Subreddit", SubredditSchema)
