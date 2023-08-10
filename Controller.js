const authenticateUser = async (req, res) => {
  const { username } = req.body;
  console.log("yes");
  return res.json({ username: username, secret: "1234s" });
};

module.exports = { authenticateUser };
