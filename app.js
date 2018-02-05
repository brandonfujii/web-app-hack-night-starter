const express = require("express")
const semver = require("semver")
const pkg = require("./package.json")

const app = express()
const port = 8080

// Checking node versions
const actual = semver(process.version)
const expected = semver(pkg.engines.node)

if (actual.version != expected.version) {
    console.error(`Wrong version! Expected ${expected.version} but received ${actual.version}...\nDownload ${expected.version} here: https://nodejs.org/en/download/releases/\n`)
    process.exit()
}

app.use(express.json())         // Makes sure we can parse JSON that is sent to our API
app.set('view engine', 'pug')   // Allows our views to be constructed using the Pug templating engine
app.set('views', './views')     // Tells our app where our view (.pug) files are located
require("./models");            // Loads our models
require("./routes")(app);       // Passes our application into a routes function, which binds functions to its endpoints

// Run the server which will listen on port 8080
app.listen(port, () => console.log(`(ノ‥)ノ Server running at http://127.0.0.1:${port}/`))
