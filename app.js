const express = require('express');
const cors = require('cors');
const getCalendar = require('./services/calendar');
const getClients = require('./services/clients');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.static('app'));

app.get('/calendar', async (req, res) => {
  const data = await getCalendar();
  res.json(data)
})

app.get('/clients', async (req, res) => {
  const data = await getClients();
  res.json(data)
})

// app.get('/payment', async (req, res) => {
//   const data = await getPayment();
//   res.json(data)
// })

app.listen(PORT, console.log(`Server started on port ${PORT}...`))



