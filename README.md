
# GLAB 319.1.1: MongoDB-Setup


## Introduction

MongoDB is one of the most popular NoSQL database solutions. <br>
MongoDB is an open source NoSQL database management program and is a document database with the scalability and flexibility that you want with the querying and indexing that you need.

## Objectives

- Create a MongoDB account.
- Create a MongoDB database cluster.
- Add user authentication to the database.
- Configure the database connection.
- Load sample data into the database.
- Acquire the database connection string.
- Install MongoDB Compass.
- Connect to the database through MongoDB Compass.
  
## Set-up Enviornment
- The guiding instructional code was written by an instructor, and I revised it with my personal notes.

```rb


## Pre-steps

 → npm init -y          # Initialize express project
 → npm i nodemon express mongoose dotenv cors   # Install all of these to connect with mongoose
 → create & open a main file (server.js ): touch 

 → npm i -D nodemom     # Install nodemon (Use this for only development. Not for the production.

 → change "start" script in package.json: "start": "node index"  # Keep resetting the server every time I make changes.
   or
 → change "start" script in package.json: "dev": "nodemon index" # consistently watch it.

 → open two terminals
 → npm start            # short for "node index.js" 
 → OR npm run dev       # run everything and starts a server

```
