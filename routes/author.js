const authorController = require("../controller/authorController");

const router = require("express").Router();

// ADD AUTHOR
router.post("/", authorController.addAuthor);

// GET ALL AUTHORs

router.get("/", authorController.getAllAuthors);

// GET AN AUTHOR
router.get("/:id", authorController.getAnAuthor);

module.exports = router;
