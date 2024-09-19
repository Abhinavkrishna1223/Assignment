const express = require("express");
const server = express();
const port = 7000 || process.env.PORT;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

server.use(express.json());
server.use(bodyParser.json());

const bookRouter = require("./routes/BooksRouter");

server.get("/", (req, res)=>{
    res.json({status:"Welcome in Library"})
})
server.use("/books", bookRouter.router);


main().catch(err => console.log(err))
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/books_store");
  console.log("Database connected successfully");
};

server.listen(port, ()=>{
    console.log(`Server ${port} Running Successfully`)
})