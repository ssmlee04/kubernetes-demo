const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const result = await axios.get(`http://app2:4000/`)
  res.json(result.data)
})

app.get('/local', async (req, res) => {
  res.json(null)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
