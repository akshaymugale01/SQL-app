const express = require('express');
const cors = require('cors'); // Require the cors package

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/query', (req, res) => {
  const { query } = req.body;
  res.status(200).json({ result: query });
});

app.get('/api/database/:type', (req, res) => {
  const { type } = req.params;
  res.status(200).json({ type, data: ['data1', 'data2', 'data3'] });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
