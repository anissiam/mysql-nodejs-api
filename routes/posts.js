const express = require('express');
const postConroller = require('../controllers/post.conroller')

const router = express.Router();

router.post('/', postConroller.save);
router.get('/:id', postConroller.show);


module.exports = router;