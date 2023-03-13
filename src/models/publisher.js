import { Schema, model } from "mongoose";
import validator from "validator";
const publisherSchema = new Schema({
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
});
const PublisherModal = model("Publisher", publisherSchema);
export default PublisherModal;
