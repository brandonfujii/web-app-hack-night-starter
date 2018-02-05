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
app.use("public",express.static("./public")); // Tells our app where our client-side assets live
app.set("view engine", "ejs")   // Allows our views to be constructed using ejs templating
app.set("views", "./views")     // Tells our app where our view (.ejs) files are located
require("./models");            // Loads our mongodb models
require("./routes")(app);       // Passes our application into a routes function, which binds functions to its endpoints

// Run the server which will listen on port 8080
app.listen(port, () => console.log(`(ノ‥)ノ Server running at http://127.0.0.1:${port}/`))
