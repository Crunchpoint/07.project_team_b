const express = require('express')
const router = express.Router();
const multer  = require('multer')
const upload = multer({
    dest: 'uploads/'
})
const UserController = require('../controllers/User')

router.post('/upload', upload.single('image'), UserController.uploadProfile)

// app.post('/upload', upload.array(), (req, res, next) => {
//     console.log('req.body', req.body);
// })

// app.listen('3000', ()=> {
//     console.log('active');
// })

module.exports = router;
