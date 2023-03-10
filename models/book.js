import { Schema, Model } from "mongoose";
import { ObjectId } from "mongodb";

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value === "A" || value === "B" || value === "C",
      message: "Book type is not valid",
    },
  },
  release_date: {
    type: Date,
    require: true,
    validator: (value) => {
      return value.getTime() <= new Date().getTime();
    },
    message: "Release date is not valid",
  },
  publisher_id: {
    type: ObjectId,
    require: true,
    ref: "Publisher",
  },
  author_id: {
    type: ObjectId,
    require: true,
    ref: "Author",
  },
});

export default Model("Book", bookSchema);
