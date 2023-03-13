import { Schema, model } from "mongoose";
import validator from "validator";
import dayjs from "dayjs";
import jwt from "jsonwebtoken";
import {} from "dotenv/config";
import bcrypt from "bcrypt";

const secretKey = process.env.JWT_KEY;
const expiresTime = process.env.expiresTime;

const userCardSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value === "A" || value === "B",
        message: "Card type is not valid",
      },
    },
    birth: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => {
          const age = dayjs().diff(value, "year", true);
          return age >= 18 && age <= 55;
        },
        message: "User age must be between 18 and 55",
      },
    },
    address: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
    },
    expire_at: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Invalid Email address",
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 0,
            returnScore: false,
          }),
        message:
          "Password length must be longer than 8, have 1 uppercase, 1 lowercase and 1 number",
      },
    },
    access_tokens: [
      {
        access_tokens: {
          type: String,
          required: true,
        },
      },
    ],
    refresh_tokens: [
      {
        refresh_tokens: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { collection: "user cards" }
);
userCardSchema.methods.createAccessToken = async function () {
  const userCard = this;
  const access_tokens = jwt.sign({ userCardId: userCard._id }, secretKey, {
    expiresIn: expiresTime,
  });
  userCard.access_tokens = userCard.access_tokens.concat({ access_tokens });
  await userCard.save();
  return access_tokens;
};
userCardSchema.pre("save", async function (next) {
  const UserCard = this;
  if (UserCard.isModified("password"))
    UserCard.password = await bcrypt.hash(UserCard.password, 10);
  UserCard.created_at = new Date();
  UserCard.expire_at = dayjs().add(6, "month").toDate();
  next();
});
export default model("UserCard", userCardSchema);
