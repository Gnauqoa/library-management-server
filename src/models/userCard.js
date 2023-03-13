import { Schema, model } from "mongoose";
import validator from "validator";
import dayjs from "dayjs";

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
export default model("UserCard", userCardSchema);
