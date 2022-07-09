const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {  
  res.send('test-scg')
})

app.use('/user', require('./routes/user.route'))
app.use('/sendmail', require('./routes/mail.route'));
app.use('/contacts', require('./routes/contacts.route'));
app.use('/tax', require('./routes/tax.route'));
app.use('/upload', require('./routes/upload.route'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})