import dayjs from "dayjs";
import Book from "../../models/book.js";
import formatBookRes from "../../services/formatBookRes.js";

const addBook = async (req, res) => {
  try {
    const { name, type, release_date, publisher_id, author_id } = req.body;
    const { date, month, year } = release_date;

    const book = new Book({
      name,
      type,
      release_date: dayjs()
        ["date"](date)
        ["month"](month)
        ["year"](year)
        .toDate(),
      publisher_id,
      author_id,
      status: true,
    });
    await book.save();
    res.status(201).json({
      message: "Add new book success",
      data: formatBookRes(
        await (await book.populate("publisher_id")).populate("author_id")
      ),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default addBook;
