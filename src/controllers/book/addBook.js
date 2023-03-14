import dayjs from "dayjs";
import Book from "../../models/book.js";
import formatBookRes from "../../services/formatBookRes.js";

const addBook = async (req, res) => {
  try {
    const { name, type, release_date, publisher_id, author_id, code } =
      req.body;
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
      code,
      created_by: req.manager._id,
      status: true,
    });

    await (
      await (
        await (
          await book.save()
        ).populate({ path: "publisher_id", populate: { path: "created_by" } })
      ).populate({ path: "author_id", populate: { path: "created_by" } })
    ).populate("created_by");

    res.status(201).json({
      message: "Add new book success",
      data: formatBookRes(book),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default addBook;
