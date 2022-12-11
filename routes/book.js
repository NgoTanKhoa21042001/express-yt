const bookController = require("../controller/bookController");

const router = require("express").Router();

// Add books
router.post("/", bookController.addABook);
// get all books

router.get("/", bookController.getAllBooks);

// get a book

router.get("/:id", bookController.getABook);

// update a book
router.put("/:id", bookController.updateABook);

module.exports = router;
