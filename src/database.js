const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI, {
  usenewUrlParser:true
})
  .then(db => console.log('Db connected'))
  .catch(err => console.error(err));

  