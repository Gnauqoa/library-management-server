import Book from "../../models/book.js";
import formatBookRes from "../../services/formatBookRes.js";

const getBooks = async (req, res) => {
  try {
    const per_page = req.per_page;
    const page = req.page;
    const query = req.query.query;

    let total_items = 0;
    let bookList;
    if (query !== undefined) {
      bookList = await Book.find({
        name: { $regex: query, $options: "i" },
      })
        .skip(per_page * (page - 1))
        .limit(per_page)
        .populate("publisher_id")
        .populate("author_id")
        .populate("created_by");
      total_items = await Book.count({
        name: { $regex: query, $options: "i" },
      });
    } else {
      bookList = await Book.find()
        .skip(per_page * (page - 1))
        .limit(per_page)
        .populate("publisher_id")
        .populate("author_id")
        .populate("created_by");
      total_items = await Book.count();
    }

    res.status(200).json({
      data: {
        items: bookList.map((data) => formatBookRes(data)),
        total_items,
        current_page: parseInt(page),
        per_page: parseInt(per_page),
        total_pages:
          parseInt(total_items / per_page) +
          parseInt(total_items % per_page ? 1 : 0),
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getBooks;
