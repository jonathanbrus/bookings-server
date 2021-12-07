const sendPersonalSms = async (req, res) => {};

const sendBulkSms = async (req, res) => {};

const sendBulkMail = async (req, res) => {};

const sendBulkPush = async (req, res) => {};

export const notifyControllers = Object.freeze({
  sendPersonalSms: sendPersonalSms,
  sendBulkSms: sendBulkSms,
  sendBulkMail: sendBulkMail,
  sendBulkPush: sendBulkPush,
});
