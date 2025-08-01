const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.resolve('client', 'dist')));

app.use('/api', require('./routes/routes'));

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
