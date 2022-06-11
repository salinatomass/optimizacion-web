const express = require('express')
const fs = require('fs')
const render = require('./render')

const app = express()

app.get('/', async (req, res) => {
  const PLACEHOLDER = '<div id="ssr-placeholder"></div>'

  const homeFileBuffer = fs.readFileSync('./dist/index.template.html')
  const htmlText = homeFileBuffer.toString()
  const [precontent, postcontent] = htmlText.split(PLACEHOLDER)

  const content = await render()

  const ssrHome = precontent + content + postcontent

  res.send(ssrHome)
})

app.use(express.static('dist'))

app.listen('3000', () => console.log(`App running on port 3000`))
