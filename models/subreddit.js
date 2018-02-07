const db = require('./db')
const schema = db.Schema
const ObjectId = schema.Types.ObjectId;

const SubredditSchema = new schema({
    title: { type: String, required: true },
    description: String,
    posts: [{ type: ObjectId, ref: "Post" }]
})

module.exports = db.model("Subreddit", SubredditSchema)
