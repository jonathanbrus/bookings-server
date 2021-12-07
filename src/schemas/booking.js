import { model, Schema } from "mongoose";

const schema = new Schema({});

export const bookingmodel = model("bookings", schema);
