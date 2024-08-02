const Analytics = require('../models/Analytics');

// Controller to get all analytics data
const getAnalyticsData = async (req, res) => {
  try {
    // Optionally, add query parameters to filter or paginate
    const analyticsData = await Analytics.find(); // Fetch all records
    
    // Send response with fetched data
    res.status(200).json(analyticsData); // Explicitly set status code to 200
  } catch (error) {
    // Log the error and send a server error response
    console.error('Error fetching analytics data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAnalyticsData };
