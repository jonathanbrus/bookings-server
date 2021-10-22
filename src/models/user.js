import { model, Schema } from "mongoose";

const schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  phone: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  state: {
    type: Schema.Types.String,
  },
  city: {
    type: Schema.Types.String,
  },
  creditPoints: {
    type: Schema.Types.Number,
    default: 0,
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

export const userModel = model("users", schema);
