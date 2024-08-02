// src/models/Analytics.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnalyticsSchema = new Schema({
  deviceId: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
  metric1: {
    type: Number,
    required: true,
  },
  metric2: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);
