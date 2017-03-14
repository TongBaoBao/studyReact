const fs = require('fs');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const resolve = file => path.resolve(__dirname, file);
const api = require('./api_router');
const app = express();

// const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

app.set('port', (process.env.port || 3000));
// app.use(favicon(resolve('../dist/book.ico.png')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// app.use('/dist', express.static(resolve('../dist')));


// app.post('/api/setup', function (req, res) {
//   new db.User(req.body)
//     .save()
//     .then(() => {
//       res.status(200).end()
//       db.initialized = true
//     })
//     .catch(() => res.status(500).end())
// })

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});

app.use(api);

app.get('/test',function (req,res){
   console.log("success");
   res.send("success");
})

// app.get('/', function (req, res) {
// //   const fileName = db.initialized ? 'index.html' : 'setup.html'
//   const fileName = 'index.html';
//   const html = fs.readFileSync(resolve('../' + fileName), 'utf-8')
//   // const html = fs.readFileSync(resolve('../setup.html'), 'utf-8')
//   res.send(html)
// })



app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})
