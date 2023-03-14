import jwt from "jsonwebtoken";
import {} from "dotenv/config";
import Manager from "../models/manager";
const secretKey = process.env.JWT_KEY;

const managerAuth = async (req, res, next) => {
  try {
    const access_token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(access_token, secretKey);
    const manager = await Manager.findOne({
      _id: decodedToken.managerId,
    });
    if (!manager) return res.status(500).json({ error: "Unauthorized" });
    if (
      manager.access_tokens.findIndex((ele) => ele.access_tokens === token) ===
      -1
    )
      return res.status(401).json({ error: "Unauthorized" });
    req.manager = manager;
    req.access_token = access_token;
    next();
  } catch (error) {
    res.status(401).send({ error: "Unauthorized" });
  }
};

export default managerAuth;
