import UserCardModel from "../../models/userCard";
import formatUserCardRes from "../../services/formatUserCardRes";

const register = async (req, res) => {
  try {
    const { first_name, last_name, type, birth, address, email, password } =
      req.body;
    const existingUser = await UserCardModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });
    const userCard = new UserCardModel({
      email,
      first_name,
      last_name,
      type,
      birth,
      address,
      password: password || "12345678",
    });
    await userCard.save();
    console.log(userCard);
    res.status(201).json({
      message: "Create user success",
      data: formatUserCardRes(userCard),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default register;
