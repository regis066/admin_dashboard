import OverAllStat from "../models/OverAllStat.js";

export const getSales = async (req, res) => {
  try {
    const overallStats = await OverAllStat.find();
    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
