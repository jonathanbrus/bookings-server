import initMB from "messagebird";

const messagebird = initMB(process.env.MESSAGE_BIRD_ACCESS_KEY);

const send = (number) => {
  var params = {
    originator: "",
    type: "sms",
    timeout: 120,
    tokenLength: 6,
  };

  return messagebird.verify.create(number, params, (err, response) => {
    if (err) {
      return console.log(err);
    }
    console.log(response);
  });
};

const verify = (verifyId, code) => {
  return messagebird.verify.verify(verifyId, code, (err, response) => {
    if (err) {
      return console.log(err);
    }
    console.log(response);
  });
};

export const otp = Object.freeze({
  send: send,
  verify: verify,
});
