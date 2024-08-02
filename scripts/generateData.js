const mongoose = require('mongoose');
const Uptime = require('../models/Uptime');
const Analytics = require('../models/Analytics');

const generateData = async () => {
  await mongoose.connect('mongodb://localhost:27017/yourdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const deviceId = 'device123';
  const now = new Date();
  const startDate = new Date(now.getTime() - (60 * 24 * 60 * 60 * 1000)); // 2 months ago
  const interval = 15 * 60 * 1000; // 15 minutes in milliseconds

  let lastStatus = false;

  for (let time = startDate; time < now; time.setMinutes(time.getMinutes() + 15)) {
    const status = !lastStatus;

    await new Uptime({ deviceId, timestamp: new Date(time), status }).save();

    const data = {
      metric1: Math.random() * 100,
      metric2: Math.random() * 100,
    };

    await new Analytics({ deviceId, timestamp: new Date(time), data }).save();

    lastStatus = status;
  }

  mongoose.connection.close();
};

generateData().catch(console.error);
