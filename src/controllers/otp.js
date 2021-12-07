import { otp } from "../services/otp.js";

const sendOtp = async (req, res) => {
  const { phone } = req.body;

  const result = otp.send(phone);

  res.json(result);
};

const verifyOtp = async (req, res) => {
  const { verifyId, code } = req.query;

  const result = otp.verify(verifyId, code);

  res.json(result);
};

export const otpControllers = Object.freeze({
  sendOtp: sendOtp,
  verifyOtp: verifyOtp,
});
