import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      // If user with the provided ID is not found, send a 404 response
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

    res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
 