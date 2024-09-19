const express = require("express");
const { createBook, getBooks, updateBook, deleteBook } = require("../controller/Books");

const router = express.Router();

router.post("/", createBook)
    .get("/", getBooks)
    .patch("/:id", updateBook)
    .delete("/:id", deleteBook)



exports.router = router;