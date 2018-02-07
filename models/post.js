const db = require('./db')
const schema = db.Schema

const PostSchema = new schema({
    title: { type: String, required: true },
    content: String,
    link: String
})

module.exports = db.model("Post", PostSchema)
