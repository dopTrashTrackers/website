const express = require('express');
const cors = require("cors");
const {sendAlert} = require('./controllers/alertController');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/alert',sendAlert);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});