const { default: axios } = require("axios");

const authenticateUser = async (req, res) => {
  const { username } = req.body;

  try {
    const resp = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
      },
      {
        headers: { "PRIVATE-KEY": "07f14470-d6e7-43bc-8361-454ccc0acc0f" },
      }
    );

    const responseData = resp.data;
    console.log(responseData) // Extract the relevant data
    return res.status(200).json(responseData);
  } catch (error) {
  
    return res.status(500).json({ error: "An error occurred." });
  }
};

module.exports = { authenticateUser };
