const request = require('supertest');
const app = require('../src/app'); // Adjust path if needed

describe('Uptime API', () => {
  it('should fetch uptime data', async () => {
    const response = await request(app)
      .get('/api/uptime')
      .query({
        deviceId: 'testDeviceId',
        start: '2024-01-01T00:00:00Z',
        end: '2024-01-31T23:59:59Z'
      });
    
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
