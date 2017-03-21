const express = require('express');
const app = express();
const path = require('path');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});
