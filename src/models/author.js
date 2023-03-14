import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
import validator from "validator";

const authorSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },

    last_name: {
      type: String,
      required: true,
    },
    birth: {
      type: Date,
      require: true,
      validator: (value) => {
        return validator.isBefore(value.toString());
      },
      message: "Birth is not valid",
    },
    sex: {
      type: Boolean,
      required: true,
    },
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
    created_by: {
      type: ObjectId,
      ref: "Manager",
      required: true,
    },
  },
  { collection: "authors" }
);
authorSchema.pre("save", async function (next) {
  const author = this;
  author.created_at = new Date();
  author.updated_at = new Date();
  next();
});
export default model("Author", authorSchema);
