import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile_numeber: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Customer = mongoose.model("Customer", customerSchema);
