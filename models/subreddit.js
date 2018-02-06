const db = require('./db')
const schema = db.Schema

const SubredditSchema = new schema({
    title: { type: String, required: true },
    description: String,
})

module.exports = db.model("Subreddit", SubredditSchema)
