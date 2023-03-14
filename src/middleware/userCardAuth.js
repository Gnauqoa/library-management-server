import jwt from "jsonwebtoken";
import UserCard from "../models/userCard.js";
import {} from "dotenv/config";

const secretKey = process.env.JWT_KEY;

const userCardAuth = async (req, res, next) => {
  try {
    const access_token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(access_token, secretKey);
    const userCard = await UserCard.findOne({
      _id: decodedToken.userCardId,
    });
    if (!userCard) return res.status(500).json({ error: "Unauthorized" });
    if (
      userCard.access_tokens.findIndex((ele) => ele.access_tokens === token) ===
      -1
    )
      return res.status(401).json({ error: "Unauthorized" });
    req.userCard = userCard;
    req.access_token = access_token;
    next();
  } catch (error) {
    res.status(401).send({ error: "Unauthorized" });
  }
};

export default userCardAuth;
