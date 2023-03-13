import Book from "../../models/book.js";
import formatBookRes from "../../services/formatBookRes.js";

const getBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookFind = await Book.findOne({ _id: bookId })
      .populate("publisher_id")
      .populate("author_id");

    res.status(200).json({
      data: formatBookRes(bookFind),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getBook;
