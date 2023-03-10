import { Schema, Model } from "mongoose";
import validator
 from "validator";
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

export default Model("Publisher", publisherSchema);
