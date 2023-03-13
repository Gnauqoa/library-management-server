import { Schema, model } from "mongoose";
import validator from "validator";

const publisherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    date_establish: {
      type: Date,
      require: true,
      validator: (value) => {
        return validator.isBefore(value.toString());
      },
      message: "Establishment date is not valid",
    },
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
  },
  { collection: "publishers" }
);
publisherSchema.pre("save", async function (next) {
  this.created_at = new Date();
  this.updated_at = new Date();
  next();
});
export default model("Publisher", publisherSchema);
