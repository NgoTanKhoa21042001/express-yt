//  file này đảm nhận chứa những controller trong đây
const { Author, Book } = require("../model/model");

const authorController = {
  // ADD AUTHOR
  addAuthor: async (req, res) => {
    // tạo author trong db
    // handle error
    try {
      // Author này là models Author
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json(savedAuthor);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // GET ALL AUTHORS
  getAllAuthors: async (req, res) => {
    try {
      //  tìm những tất cả các record màk trong AuthorSchema
      const authors = await Author.find();
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // GET An AUTHORS

  getAnAuthor: async (req, res) => {
    try {
      // mÚn hiện thông tin book lun
      const author = await Author.findById(req.params.id).populate("books");
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Update author
  updateAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id);
      await author.updateOne({ $set: req.body });
      res.status(200).json("Update Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = authorController;
