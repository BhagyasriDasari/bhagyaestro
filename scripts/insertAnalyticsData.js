// scripts/insertAnalyticsData.js

const mongoose = require('mongoose');
const Analytics = require('../src/models/Analytics'); 

const insertAnalyticsData = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/yourdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const data = new Analytics({
    deviceId: 'device123',
    timestamp: new Date(),
    metric1: 50.5,
    metric2: 25.0,
  });

  await data.save();
  console.log('Analytics data inserted successfully');

  mongoose.connection.close();
};

insertAnalyticsData().catch(console.error);
