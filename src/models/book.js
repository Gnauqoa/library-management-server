import { Schema, model } from "mongoose";
import { ObjectId } from "mongodb";

const bookSchema = new Schema(
  {
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
        return validator.isBefore(value.toString());
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
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
    created_by: {
      type: ObjectId,
      required: true,
      ref: "Manager",
    },
    status: {
      type: Boolean,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  { collection: "books" }
);
bookSchema.pre("save", async function (next) {
  const Book = this;
  Book.created_at = new Date();
  Book.updated_at = new Date();
  next();
});
export default model("Book", bookSchema);
