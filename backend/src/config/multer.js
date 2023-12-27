const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1]);
  }
});

module.exports = multer({
    storage,
    limits: {
      fileSize: 1000000 // 1MB
    },
    fileFilter: (req, file, cb) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  
      if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error('Invalid file type');
        error.code = 'INVALID_FILE_TYPE';
        return cb(error, false);
      }
  
      cb(null, true);
    }
})