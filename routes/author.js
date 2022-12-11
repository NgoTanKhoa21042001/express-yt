const authorController = require("../controller/authorController");

const router = require("express").Router();

// ADD AUTHOR
router.post("/", authorController.addAuthor);

// GET ALL AUTHORs

router.get("/", authorController.getAllAuthors);

// GET AN AUTHOR
router.get("/:id", authorController.getAnAuthor);

// UPDATE AUTHOR
router.put("/:id", authorController.updateAuthor);

// Delete AUTHOR

router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
