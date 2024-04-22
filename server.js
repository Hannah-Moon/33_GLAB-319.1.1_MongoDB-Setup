///////////////////////////////////////////////
///////////////// Meta Set Up /////////////////
///////////////////////////////////////////////


require("dotenv").config()
// ------> allows .env

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const connecToDb = require('./config/connectToDB.js') // This pulls our Mongoose connection into application
const cors = require('cors')  // Allow us use in our request. Recieving reqs on cross-origins **


// ------------------------------------------ [ middleware ]

app.use(express.json())
// Express convert data to json because express doesn't naturally convert our data to json 

// Sign up for this account: https://www.mongodb.com/products/tools/compass
app.use(cors())


app.get("/", (req, res) => {
    res.send("This is a landing page")
})

// ------------------------------------------ [ Routing ]
// Obj: We want to establish CRUD routes for our Notes Model.

app.post('/notes', {})
// Create a note
// ------------------------------------------ * Create

app.get("/notes/:id", {})
// Get a Specific Note by ID

app.get("/notes", {})
// Get all notes

// ------------------------------------------ * Read

get.put("/notes/:id",{})
// ------------------------------------------ * Update


get.delete("/notes/:id")
// ------------------------------------------ * Delete
// --- ~ --- ~ --- ~ --- ~ --- ~ --- ~ --- ~ --- ~ --- ~ --- ~ --- ~ --- ~ --- ~ --- ~




// --------------------- [ Database Connection ]


app.listen(PORT, () => {
    console.log(`Express Server listening on port num: ${PORT}`)
})


connecToDb()  //--> This initializes our connecttoDB() Function 
