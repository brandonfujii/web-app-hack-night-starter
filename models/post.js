const db = require('./db')
const schema = db.Schema

const PostSchema = new schema({
    title: { type: String, required: true },
    content: String,
    link: String,
    subredditId: ObjectId
})

module.exports = db.model("Post", PostSchema)
