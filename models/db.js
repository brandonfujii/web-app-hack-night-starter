const mongoose = require("mongoose")

const db = {
    host: "127.0.0.1",
    port: 27017,
    name: "reddit_db",
    username: "test_user",
    password: "test",
}

mongoose.connect(`mongodb://${db.username}:${db.password}@${db.host}:${db.port}/${db.name}`)
    .then(instance => console.log(`(ノ‥)ノ Successfully connected to database ${db.name} on the mongodb instance ${db.host}:${db.port}`))
    .catch(err => {
        console.error(`(╯°▽°)╯ ┻━┻ The following database error occurred:\n${err}`)
        process.exit()
    })

module.exports = mongoose
