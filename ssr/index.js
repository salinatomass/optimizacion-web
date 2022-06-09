const express = require('express')
const fs = require('fs')
const render = require('./render')

const app = express()

app.get('/', async (req, res) => {
  const content = await render()
  res.send(content)
})

app.listen('3000', () => console.log(`App running on port 3000`))
