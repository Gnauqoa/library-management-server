import dayjs from "dayjs";
import Publisher from "../../models/Publisher.js";
import formatPublisherRes from "../../services/formatPublisherRes.js";

const addPublisher = async (req, res) => {
  try {
    const { name, date_establish, address } = req.body;
    const { date, month, year } = date_establish;

    const publisher = new Publisher({
      name,
      address,
      birth: dayjs()["date"](date)["month"](month)["year"](year).toDate(),
    });
    await publisher.save();
    res.status(201).json({
      message: "Create publisher success",
      data: formatPublisherRes(publisher),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default addPublisher;
