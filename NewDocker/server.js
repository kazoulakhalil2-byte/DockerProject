// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/hello', (req, res) => res.json({ message: 'Hello from Docker Hello!' }));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
