const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {  
  res.send('test-scg')
})

app.use('/contacts', require('./routes/contacts.route'));
app.use('/sendmail', require('./routes/sendMail.route'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})