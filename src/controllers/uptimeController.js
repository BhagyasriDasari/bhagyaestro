const Uptime = require('../models/Uptime');

exports.getUptimeData = async (req, res) => {
  const { deviceId, start, end } = req.query;
  try {
    const uptimes = await Uptime.find({
      deviceId,
      timestamp: { $gte: new Date(start), $lte: new Date(end) }
    });
    res.json(uptimes);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
