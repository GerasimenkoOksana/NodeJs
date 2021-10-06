const express = require("express");
const router = express.Router();

const cBook = require("./controllers/bookController");
router.get("/api/books", cBook.get);
router.post("/api/books", cBook.post);
router.put("/api/books", cBook.put);
router.delete("/api/books", cBook.delete);

module.exports = router;