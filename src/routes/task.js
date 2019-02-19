const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
 res.send('Hello Word')
});

router.get('/image/add', (req, res) =>{  
  res.render('layouts/main');
});


module.exports = router;