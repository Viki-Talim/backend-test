const Academy = require("../pkg/academy/academySchema");

exports.getAll = async (req, res) => {
  try {
    const academy = await Academy.find();
    res.status(200).json({
      status: "success",
      data: {
        academy,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const academy = await Academy.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        academy,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const academy = await Academy.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        academy,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const academy = await Academy.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        academy,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Academy.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(501).json({
      status: "fail",
      message: err.message,
    });
  }
};
