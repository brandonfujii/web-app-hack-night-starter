const mongoose = require("mongoose")

const db = { 
    host: "127.0.0.1",
    port: 27017,
    name: "reddit_db",
    username: "test_user",
    password: "test",
}

let dbUri = process.env.NODE_ENV == 'production' ? process.env.MONGO_URI : `mongodb://${db.username}:${db.password}@${db.host}:${db.port}/${db.name}`;

mongoose.connect(dbUri)
    .then(instance => console.log(`(ノ‥)ノ Successfully connected to database ${db.name} on the mongodb instance ${db.host}:${db.port}`))
    .catch(err => {
        console.error(`(╯°▽°)╯ ┻━┻ The following database error occurred:\n${err}`)
        process.exit()
    })

module.exports = mongoose
