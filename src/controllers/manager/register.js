import Manager from "../../models/manager.js";
import formatManagerRes from "../../services/formatManagerRes.js";

const register = async (req, res) => {
  try {
    const { account, first_name, last_name, password } = req.body;
    const existingUser = await Manager.findOne({ account });
    if (existingUser)
      return res.status(400).json({ message: "Manager already exists" });
    const manager = new Manager({
      account,
      first_name,
      last_name,
      password,
    });
    await manager.save();
    res.status(201).json({
      message: "Create manager success",
      data: formatManagerRes(manager),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default register;
