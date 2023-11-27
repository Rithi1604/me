const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/book_controller")

router.get("/",booksController.getAllBooks);
router.post("/",booksController.addbook);
router.get("/:id",booksController.getById);
router.put("/:id",booksController.updateBook);
router.delete("/:id",booksController.deleteBook);

module.exports=router;