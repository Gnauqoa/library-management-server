import Manager from "../../models/manager.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    const { account, password } = req.body;
    const manager = await Manager.findOne({ account });
    if (!manager)
      return res.status(401).json({ message: "Account does not exist" });
    const isPasswordMatch = await bcrypt.compare(password, manager.password);
    if (!isPasswordMatch)
      return res.status(401).json({ message: "Password not correct" });
    const access_token = await manager.createAccessToken();
    res.status(200).json({ access_token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default login;
