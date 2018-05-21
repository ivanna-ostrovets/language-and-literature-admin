const path = require('path');
const url = require('url');
const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 4200;
const API_URL = process.env.API_URL || 'http://localhost:3000';

const OUTPUT_DIR = 'dist';

app.use('/api/v1', proxy(API_URL, {
  proxyReqPathResolver(req, res) {
    return '/api/v1' + url.parse(req.url).path;
  },
  xfwd: true,
}));

app.use(express.static(path.join(__dirname, OUTPUT_DIR)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `${OUTPUT_DIR}/index.html`));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});
