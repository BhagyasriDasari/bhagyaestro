const express = require('express');
const validate = require('../middleware/validate');
const uptimeSchema = require('../validation/uptime');
const Uptime = require('../models/Uptime');
const router = express.Router();

// Apply validation middleware to a specific route
router.get('/', validate(uptimeSchema), async (req, res) => {
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
});

module.exports = router;
