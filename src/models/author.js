import { Schema, model } from "mongoose";
import validator from "validator";

const authorSchema = new Schema({
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
});
const AuthorModal = model("Author", authorSchema);
export default AuthorModal;
