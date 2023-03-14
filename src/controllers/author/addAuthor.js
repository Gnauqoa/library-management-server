import dayjs from "dayjs";
import Author from "../../models/author.js";
import formatAuthorRes from "../../services/formatAuthorRes.js";

const addAuthor = async (req, res) => {
  try {
    const { first_name, last_name, birth, sex } = req.body;
    const { date, month, year } = birth;

    const author = new Author({
      created_by: req.manager._id,
      first_name,
      last_name,
      sex,
      birth: dayjs()["date"](date)["month"](month)["year"](year).toDate(),
    });
    await (await author.save()).populate("created_by");
    res.status(201).json({
      message: "Create author success",
      data: formatAuthorRes(author),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default addAuthor;
