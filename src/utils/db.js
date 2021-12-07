import mongoose from "mongoose";

const connectMongo = async (cb) => {
  const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  };

  try {
    await mongoose.connect(process.env.MONGO_STRING, config);
    return cb();
  } catch (err) {
    return cb(err);
  }
};
export default connectMongo;
