class UserController {
  index(req, res) {
    console.log(req.body);
  }

  show(req, res) {
    const users = ["Vinicius", "Rafael"]
    return res.status(200).json({
      error: false,
      users
    });
  };
};

module.exports = new UserController();