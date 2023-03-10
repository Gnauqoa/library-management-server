import { Schema, Model } from "mongoose";
import validator from "validator";
import dayjs from "dayjs";

const userCardSchema = new Schema({
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
  add_card_date: {
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
});

export default Model("UserCard", userCardSchema);
