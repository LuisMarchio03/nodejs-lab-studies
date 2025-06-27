import mongoose, { now } from "mongoose";
const Schema = mongoose.Schema;

const products = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Model = mongoose.model("Products", products);

export default Model;
