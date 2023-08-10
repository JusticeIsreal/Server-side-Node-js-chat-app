const authenticateUser = async (req, res) => {
  const { username } = req.body;
  try {
    const resp = axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        hearders: { private_key: process.env.CHAT_ENGINE_PRIVATE_KEY },
      }
    );
    return res.status(resp.status).json(resp.data);
  } catch (error) {
    return res.status(error.resp.status).json(error.resp.data);
  }

  return res.json({ username: username, secret: "1234s" });
};

module.exports = { authenticateUser };
