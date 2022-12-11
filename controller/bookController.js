// controller là để tạo ra những function thực hiện việc gi

const { Book, Author } = require("../model/model");

const bookController = {
  // add a book
  addABook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      if (req.body.author) {
        // đầu tiên có tìm tác giả có trong sách hay ko
        const author = Author.findById(req.body.author);
        // sau khi tìm ra tác giả thì update , push cái id sách vào mục book của bảng tác giả
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // GET ALL BOOKS
  getAllBooks: async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.status(200).json(allBooks);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // GET a BOOKS

  getABook: async (req, res) => {
    try {
      const getBook = await Book.findById(req.params.id).populate("author");
      res.status(200).json(getBook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // update book
  updateABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      // update những gi đc gửi lên
      await book.updateOne({ $set: req.body });
      res.status(200).json("Updated Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Delete a book

  deleteBook: async (req, res) => {
    try {
      // lấy sách ra từ author
      // cần phải xóa book trong author
      // bởi vì book là array nên sài đc pull
      await Author.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
