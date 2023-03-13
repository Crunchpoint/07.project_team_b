const express = require('express')
  const router = express.Router();
  const multer  = require('multer')
  const upload = multer({
      dest: 'uploads/'
  })
  const UserController = require('../../pages/controllers/User')

  router.post('/api/file_upload', upload.single('image'), UserController.uploadProfile)

  // app.post('/upload', upload.array(), (req, res, next) => {
  //     console.log('req.body', req.body);
  // })

  // app.listen('3000', ()=> {
  //     console.log('active');
  // })

  module.exports = router;
  
const User = {
  uploadProfile: async (req, res) => {
    const img = req.file.path;
    console.log('userjs', req.file);
    if(img === undefined) {
        return res.status(400).send(util.fail(400, "이미지 없음"))
    }
    res.status(200).send(util.success(200, "sucess", img));
  }
}

module.export = User