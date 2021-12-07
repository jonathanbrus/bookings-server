const createHall = async (req, res) => {};

const updateHall = async (req, res) => {};

const getAllHalls = async (req, res) => {
  res.json({
    status: 200,
    message: "fetched halls successfully.",
    data: [],
  });
};

const deleteHall = async (req, res) => {};

const checkHallAvailability = async (req, res) => {};

export const hallsControllers = Object.freeze({
  createHall: createHall,
  updateHall: updateHall,
  getAllHalls: getAllHalls,
  deleteHall: deleteHall,
  checkHallAvailability: checkHallAvailability,
});
