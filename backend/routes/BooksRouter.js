const express = require("express");
const { createBook, getBooks, updateBook, deleteBook, bookById } = require("../controller/Books");

const router = express.Router();

router.post("/", createBook)
    .get("/", getBooks)
    .patch("/:id", updateBook)
    .delete("/:id", deleteBook)
    .get("/:id", bookById)



exports.router = router;