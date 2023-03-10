import { Schema, model } from "mongoose";
import validator from "validator";
import {} from "dotenv/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const secretKey = process.env.JWT_KEY;
const expiresTime = process.env.expiresTime;

const managerSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    account: {
      type: String,
      required: true,
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
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
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
  { collection: "managers" }
);
managerSchema.methods.createAccessToken = async function () {
  const manager = this;
  const access_tokens = jwt.sign({ managerId: manager._id }, secretKey, {
    expiresIn: expiresTime,
  });
  manager.access_tokens = manager.access_tokens.concat({ access_tokens });
  console.log(manager);
  await manager.save();
  return access_tokens;
};
managerSchema.pre("save", async function (next) {
  const manager = this;
  if (manager.isModified("password"))
    manager.password = await bcrypt.hash(manager.password, 10);
  manager.created_at = new Date();
  manager.updated_at = new Date();
  next();
});
export default model("Manager", managerSchema);
