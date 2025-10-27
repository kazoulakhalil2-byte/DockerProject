// test.js
const http = require('http');

const req = http.request({ hostname: 'localhost', port: process.env.PORT || 3000, path: '/health', method: 'GET', timeout: 2000 }, res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('TEST OK');
      process.exit(0);
    } else {
      console.error('TEST FAIL', res.statusCode, body);
      process.exit(1);
    }
  });
});

req.on('error', err => { console.error('TEST ERROR', err.message); process.exit(1); });
req.end();
