const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UptimeSchema = new Schema({
  deviceId: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  status: {
    type: Boolean, // Change this to Boolean
    required: true
  }
});

module.exports = mongoose.model('Uptime', UptimeSchema);
