import mongoose from "mongoose";

const Schema = mongoose.Schema;

const main = new Schema({
  minutesWorking: {
    type: String,
    required: true,
  },
  shortBreak: {
    type: String,
    required: true,
  },
});

const Model = mongoose.model("Main", main);

export default Model;
