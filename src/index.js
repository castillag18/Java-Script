if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const app = require('./app');

app.listen(app.get('port'), () =>{
  console.log('Server Turn On', app.get('port'));
  console.log('Enviroment: ', process.env.NODE_ENV)
});
