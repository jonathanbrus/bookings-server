import { model, Schema } from "mongoose";

const schema = new Schema({
  code: {
    type: Schema.Types.Number,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  discount: {
    type: Schema.Types.Number,
    required: true,
  },
  type: {
    type: Schema.Types.String,
    required: true,
  },
});

export const offerModel = model("offers", schema);
