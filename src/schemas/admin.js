import { model, Schema } from "mongoose";

const schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  phone: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  role: {
    type: Schema.Types.String,
    enum: ["Master", "Worker"],
  },
  notify: {
    device: {
      type: Schema.Types.String,
      enum: ["android", "iOS"],
    },
    token: {
      type: Schema.Types.String,
    },
  },
});

export const adminModel = model("admins", schema);
