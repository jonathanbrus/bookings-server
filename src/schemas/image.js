import { model, Schema } from "mongoose";

const schema = new Schema({
  url: {
    type: Schema.Types.String,
    required: true,
  },
  purpose: {
    type: Schema.Types.String,
    required: true,
  },
});

export const imageModel = model("images", schema);
