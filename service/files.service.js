const multer = require('multer');

// SET STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      const lastNameFile = file.originalname.split('.')[file.originalname.split('.').length-1]
      cb(null, file.fieldname + '-' + Date.now()+'.'+lastNameFile)
    }
  })
   
const upload = multer({ storage: storage })

module.exports = { upload }