const Uptime = require('../models/Uptime');
const Analytics = require('../models/Analytics');

exports.getReport = async (req, res) => {
  const { deviceId, start, end } = req.query;
  try {
    const uptimes = await Uptime.find({
      deviceId,
      timestamp: { $gte: new Date(start), $lte: new Date(end) }
    });
    const analytics = await Analytics.find({
      deviceId,
      timestamp: { $gte: new Date(start), $lte: new Date(end) }
    });
    res.json({ uptimes, analytics });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
