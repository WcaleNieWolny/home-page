const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.redirect('https://github.com/WcaleNieWolny')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
